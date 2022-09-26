import {Injectable} from '@angular/core';
import {Shipment} from "../models/Shipment";
import {ShipmentStatus} from "../enums/ShipmentStatus";
import {ShipmentProblem} from "../enums/ShipmentProblem";
import {ClientServiceService} from "./client-service.service";
import {SystemUserServiceService} from "./system-user-service.service";
import {ReceiverServiceService} from "./receiver-service.service";
import {AddressServiceService} from "./address-service.service";

@Injectable({
  providedIn: 'root'
})
export class ShipmentServiceService {
  receptionDate: Date = new Date("2022-08-18");
  deliveryDate: Date = new Date("2022-08-17");
  constructor(private addressService: AddressServiceService, private clientService: ClientServiceService, private systemUserService:SystemUserServiceService, private receiverService: ReceiverServiceService) { }
  getTestShipmentDetail(): Shipment {
    //test data
    return{
      shipmentId:5,
      shipmentCode:"AB6578-1",
      shipmentNumberOfPackages:3,
      shipmentReceptionDate:this.receptionDate,
      shipmentDeliveryDate: this.deliveryDate,
      shipmentOnRouteDate: this.receptionDate,
      shipmentOnReturnDate: this.receptionDate,
      shipmentReturnDate: undefined,
      shipmentClient:this.clientService.getClientDetail(1),
      shipmentAddress:this.addressService.getReceiverAddresses(1)[1],
      shipmentReceiver:this.receiverService.getReceiverDetail(1),
      shipmentDeliveryTransporter:this.systemUserService.getSystemUserDetail(1),
      shipmentPickUpTransporter:this.systemUserService.getSystemUserDetail(1),
      shipmentReceiverUser:this.systemUserService.getSystemUserDetail(1),
      shipmentCost:29.50,
      shipmentPhotoUrls:['ab65781.jpg', 'ab65782.jpg', 'ab65783.jpg'],
      shipmentObservations:"No se pudo encontrar la dirección",
      shipmentStatus: ShipmentStatus.IN_RETURN,
      shipmentProblems: ShipmentProblem.ADDRESS_NOT_FOUND,
      shipmentCreationDate:this.receptionDate,
      shipmentModificationDate:this.receptionDate,
    }
  }
  getShipmentDetail(shipmentCode: string): Shipment {
    return this.getTestShipmentDetail();
  }
}
