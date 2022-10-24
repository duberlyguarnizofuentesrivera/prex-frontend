import {Component, OnInit} from '@angular/core';
import {LocationService} from "../services/location-service.service";
import {TicketService} from "../services/ticket-service.service";
import {Shipment} from "../models/Shipment";
import {Client} from "../models/Client";
import {Address} from "../models/Address";
import {Receiver} from "../models/Receiver";
import {ShipmentStatus} from "../enums/ShipmentStatus";
import {ShipmentProblem} from "../enums/ShipmentProblem";
import {ShipmentService} from "../services/shipment-service.service";
import {ClientService} from "../services/client-service.service";
import {ReceiverService} from "../services/receiver-service.service";
import {MessageService} from "primeng/api";
import {Ticket} from "../models/Ticket";
import {TicketStatus} from "../enums/TicketStatus";
import {TicketPaymentStatus} from "../enums/TicketPaymentStatus";
import {SystemUserService} from "../services/system-user-service.service";
import {AddressService} from "../services/address-service.service";

@Component({
  selector: 'app-page-user-tickets-new',
  templateUrl: './page-user-tickets-new.component.html',
  styleUrls: ['./page-user-tickets-new.component.css'],
  providers: [MessageService]
})
export class PageUserTicketsNewComponent implements OnInit {
  region: string;
  province: string;
  district: string;
  regionResults: string[];
  provinceResults: string[];
  districtResults: string[];
  ticketCode: string = "";
  validCitySelection: boolean;
  ticketShipments: Shipment[];
  ticketTotalCost: number = 0;

  //shipment properties
  shipmentId: number = 0;
  shipmentCode: string = "";
  shipmentNumberOfPackages: number = 1;
  thisMoment: Date = new Date();
  shipmentClientDocumentId: string = "";
  shipmentAddressLine: string = "";
  shipmentReceiverDocumentId: string = "";
  shipmentCost: number = 0;
  shipmentObservations: string = "";
  selectedReceiverAddressId: number = 0;
  receiverAddresses: Address[] = [];

  //others
  displayAddressModal: boolean = false;
  clientName: string = "";
  receiverName: string = "";
  receiverFieldDisabled: boolean = true;
  addressListFieldDisabled: boolean = true;


  constructor(private locationService: LocationService,
              private ticketService: TicketService,
              private shipmentService: ShipmentService,
              private clientService: ClientService,
              private receiverService: ReceiverService,
              private systemUserService: SystemUserService,
              private addressService: AddressService,
              private messageService: MessageService) {
    this.region = '';
    this.province = '';
    this.district = '';
    this.regionResults = [];
    this.provinceResults = [];
    this.districtResults = [];
    this.validCitySelection = false;
    this.ticketShipments = [];
  }

  ngOnInit(): void {
  }

  searchRegion(event: { query: string; }) {
    this.regionResults = this.locationService.getRegions().filter(region => region.toLowerCase().indexOf(event.query.toLowerCase()) == 0);
  }

  searchProvince(event: { query: string; }) {
    // @ts-ignore
    this.provinceResults = this.locationService.getProvinces(this.region).filter(province => province.toLowerCase().indexOf(event.query.toLowerCase()) == 0);
  }

  searchDistrict(event: { query: string; }) {
    // @ts-ignore
    this.districtResults = this.locationService.getDistricts(this.region, this.province).filter(district => district.toLowerCase().indexOf(event.query.toLowerCase()) == 0);
  }

  searchReceiver() {
    this.receiverService.getReceiverByDocumentId(this.shipmentReceiverDocumentId).subscribe({
      next: (receivers: Receiver[]) => {
        console.log(receivers);
        if (receivers.length > 0) {
          this.receiverAddresses = receivers[0].receiverAddress;
          this.receiverName = receivers[0].receiverNames;
          this.addressListFieldDisabled = false;
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No se encontró destinatario con ese documento'
          });
        }
        console.log(this.receiverAddresses);
      }, error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo obtener la información del destinatario desde el servidor'
        });
      }
    });
  }

  searchClient() {
    this.clientService.getClientByDocumentID(this.shipmentClientDocumentId).subscribe({
      next: (clients: Client[]) => {
        if (clients.length > 0) {
          this.clientName = clients[0].clientNames;
          this.receiverFieldDisabled = false;
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No se encontró cliente con ese documento'
          });
        }
      }, error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo obtener la información del cliente desde el servidor'
        });
      }
    });
  }

  addShipment() {
    //city validation
    try {
      this.validCitySelection = this.locationService.validSelection(this.region, this.province, this.district) && this.shipmentAddressLine != "";
      if (this.validCitySelection) {
        let inputClient: Client;
        let inputReceiver: Receiver;
        this.clientService.getClientByDocumentID(this.shipmentClientDocumentId).subscribe({
          next: (client) => {
            inputClient = client[0];
            this.receiverService.getReceiverByDocumentId(this.shipmentReceiverDocumentId).subscribe({
              next: (receiver) => {
                inputReceiver = receiver[0];

                let address: Address;
                this.addressService.getAddress(this.selectedReceiverAddressId).subscribe(
                  (addressResponse) => {
                    address = addressResponse;
                    const shipment: Shipment = {
                      shipmentId: this.ticketShipments.length + 1,
                      shipmentCode: this.ticketCode + '-' + (this.ticketShipments.length + 1),
                      shipmentNumberOfPackages: this.shipmentNumberOfPackages,
                      shipmentReceptionDate: this.thisMoment,
                      shipmentClient: inputClient,
                      shipmentAddress: address,
                      shipmentReceiver: inputReceiver,
                      shipmentCost: this.shipmentCost,
                      shipmentPhotoUrls: [],
                      shipmentObservations: this.shipmentObservations,
                      shipmentStatus: ShipmentStatus.RECEIVED,
                      shipmentProblems: ShipmentProblem.NONE,
                      shipmentCreationDate: this.thisMoment,
                      shipmentModificationDate: this.thisMoment
                    }
                    console.log(shipment);
                    this.ticketShipments.push(shipment)
                    this.ticketTotalCost += this.shipmentCost;
                    console.log(this.ticketShipments);
                  }
                );

              }, error: () => {
                this.messageService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: 'No se encontró DESTINATARIO con el documento indicado'
                });
              }
            })
            ;
          }, error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'No se encontró CLIENTE con el documento indicado'
            });
          }
        });
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Error',
          detail: 'Debe seleccionar una ciudad y una dirección'
        });
      }
    } catch (e) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Advertencia',
        detail: 'Por favor seleccione una ciudad válida'
      });
      this.validCitySelection = false;
    }
  }

  removeShipment(shipmentId: number) {
    console.log("borrando: " + shipmentId);
    this.ticketShipments = this.ticketShipments.filter(s => s.shipmentId != shipmentId);
    console.log(this.ticketShipments);
  }

  generateTicket() {
    const ticket: Ticket = {
      ticketId: 0,
      ticketCode: this.ticketCode,
      shipments: this.ticketShipments,
      ticketTotalCost: this.ticketTotalCost,
      ticketClient: this.ticketShipments[0].shipmentClient,
      ticketSystemUser: this.systemUserService.getSystemUserDetail(1), //TODO: get logged user
      ticketCreationDate: this.thisMoment,
      ticketModificationDate: this.thisMoment,
      ticketStatus: TicketStatus.NORMAL,
      ticketPaymentStatus: TicketPaymentStatus.PAID
    }
    this.ticketService.addTicket(ticket).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'El ticket se ha generado correctamente'
        });
      }, error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo generar el ticket'
        });
      }
    });
  }
  createNewReceiverAddress() {
    const newAddress: Address = {
      addressId: 0,
      addressLine: this.shipmentAddressLine,
      addressRegion: this.region,
      addressProvince: this.province,
      addressDistrict: this.district,
      addressObservations: ""
    };
    this.addressService.addAddress(newAddress).subscribe({
      next: (address) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'La dirección se ha creado correctamente'
        });
        this.receiverService.addAddressToReceiver(this.selectedReceiverAddressId, address.addressId).subscribe({
          next: () => {
          }, error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'No se pudo agregar la dirección al destinatario en el servidor'
            });
          }
        });
      }
    });
  }

  identity(value: any): Shipment {
    return value as Shipment;
  }

  showAddressModal() {
    this.displayAddressModal = true;
  }
}
