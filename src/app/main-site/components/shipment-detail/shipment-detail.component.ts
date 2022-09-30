import {Component, OnInit} from '@angular/core';
import {Shipment} from "../../models/Shipment";
import {ShipmentServiceService} from "../../services/shipment-service.service";
import {MenuItem, PrimeIcons} from "primeng/api";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-shipment-detail',
  templateUrl: './shipment-detail.component.html',
  styleUrls: ['./shipment-detail.component.css']
})
export class ShipmentDetailComponent implements OnInit {
  shipmentId!: number;
  shipmentDetail: Observable<Shipment>;
  address: MenuItem[];
  events: any[];

  constructor(private route: ActivatedRoute, private shipmentService: ShipmentServiceService, private datePipe: DatePipe) {
    const routeParams = this.route.snapshot.paramMap;
    this.shipmentId = Number(routeParams.get('shipmentId'));
    console.log("Ruta:")
    console.log(this.shipmentId);
    this.events = [];
    this.address = [];
    this.shipmentDetail = this.shipmentService.getShipment(this.shipmentId);
    this.shipmentDetail.subscribe((data) => {
      this.address = [{label: data.shipmentAddress.addressRegion},
        {label: data.shipmentAddress.addressProvince},
        {label: data.shipmentAddress.addressDistrict},
        {label: data.shipmentAddress.addressLine},];
      this.events = [
        {
          status: 'Recepcionado',
          date: this.datePipe.transform(data.shipmentCreationDate, 'dd/MM/yy'),
          icon: PrimeIcons.CALENDAR,
          color: '#f06bac'
        }
      ];
      if (data.shipmentReceptionDate != undefined) {
        this.events.push({
          status: 'En almacén',
          date: this.datePipe.transform(data.shipmentReceptionDate, 'dd/MM/yy'),
          icon: PrimeIcons.BOX,
          color: '#8183f4'
        })
      }
      if (data.shipmentOnRouteDate != undefined) {
        this.events.push({
          status: 'En reparto',
          date: this.datePipe.transform(data.shipmentOnRouteDate, 'dd/MM/yy'),
          icon: PrimeIcons.CAR,
          color: '#35c4dc'
        })
      }
      if (data.shipmentOnReturnDate != undefined) {
        this.events.push({
          status: 'En Devolución',
          date: this.datePipe.transform(data.shipmentOnReturnDate, 'dd/MM/yy'),
          icon: PrimeIcons.CAR,
          color: '#ff6259'
        })
      }
      if (data.shipmentReturnDate != undefined) {
        this.events.push({
          status: 'Devuelto',
          date: this.datePipe.transform(data.shipmentReturnDate, 'dd/MM/yy'),
          icon: PrimeIcons.EXCLAMATION_CIRCLE,
          color: '#ff6259'
        })
      }
      if (data.shipmentDeliveryDate != undefined) {
        this.events.push({
          status: 'Entregado',
          date: this.datePipe.transform(data.shipmentDeliveryDate, 'dd/MM/yy'),
          icon: PrimeIcons.CHECK,
          color: '#35dc35'
        })
      }
    });
  }


  ngOnInit(): void {

  }
}
