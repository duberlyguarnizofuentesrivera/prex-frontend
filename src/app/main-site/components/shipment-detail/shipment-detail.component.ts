import {Component, Input, OnInit} from '@angular/core';
import {Shipment} from "../../models/Shipment";
import {ShipmentServiceService} from "../../services/shipment-service.service";
import {MenuItem, PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-shipment-detail',
  templateUrl: './shipment-detail.component.html',
  styleUrls: ['./shipment-detail.component.css']
})
export class ShipmentDetailComponent implements OnInit {
  @Input() shipmentId: string;
  shipmentDetail: Shipment;
  address: MenuItem[]
  events: any[];

  constructor(private shipmentService: ShipmentServiceService) {
    this.shipmentId = "";
    this.shipmentDetail = shipmentService.getShipmentDetail(this.shipmentId);
    this.address = [{label: this.shipmentDetail.shipmentAddress.addressRegion},
      {label: this.shipmentDetail.shipmentAddress.addressProvince},
      {label: this.shipmentDetail.shipmentAddress.addressDistrict},
      {label: this.shipmentDetail.shipmentAddress.addressLine},];

    this.events = [
      {
        status: 'Recepcionado',
        date: this.shipmentDetail.shipmentCreationDate.toLocaleString(),
        icon: PrimeIcons.CALENDAR,
        color: '#f06bac'
      }
    ];
    if (this.shipmentDetail.shipmentReceptionDate != undefined) {
      this.events.push({
        status: 'En almacén',
        date: this.shipmentDetail.shipmentReceptionDate.toLocaleString(),
        icon: PrimeIcons.BOX,
        color: '#8183f4'
      })
    }
    if (this.shipmentDetail.shipmentOnRouteDate != undefined) {
      this.events.push({
        status: 'En reparto',
        date: this.shipmentDetail.shipmentOnRouteDate.toLocaleString(),
        icon: PrimeIcons.CAR,
        color: '#35c4dc'
      })
    }
    if (this.shipmentDetail.shipmentDeliveryDate != undefined) {
      this.events.push({
        status: 'Entregado',
        date: this.shipmentDetail.shipmentDeliveryDate.toLocaleString(),
        icon: PrimeIcons.CHECK,
        color: '#35dc35'
      })
    }
  }

  ngOnInit(): void {
  }

}
