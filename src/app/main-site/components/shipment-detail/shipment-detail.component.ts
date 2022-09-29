import {Component, OnInit} from '@angular/core';
import {Shipment} from "../../models/Shipment";
import {ShipmentServiceService} from "../../services/shipment-service.service";
import {MenuItem, PrimeIcons} from "primeng/api";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

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

  constructor(private route: ActivatedRoute, private shipmentService: ShipmentServiceService) {
    const routeParams = this.route.snapshot.paramMap;
    this.shipmentId = Number(routeParams.get('shipmentId'));
    console.log("Ruta:")
    console.log(this.shipmentId);
    this.events = [];
    this.address = [];
    this.shipmentDetail = this.shipmentService.getShipment(this.shipmentId);
    console.log(this.shipmentDetail);
    this.shipmentDetail.subscribe((data) => {
      this.address = [{label: data.shipmentAddress.addressRegion},
        {label: data.shipmentAddress.addressProvince},
        {label: data.shipmentAddress.addressDistrict},
        {label: data.shipmentAddress.addressLine},];
      this.events = [
        {
          status: 'Recepcionado',
          date: data.shipmentCreationDate.toLocaleString(),
          icon: PrimeIcons.CALENDAR,
          color: '#f06bac'
        }
      ];
      if (data.shipmentReceptionDate != undefined) {
        this.events.push({
          status: 'En almacén',
          date: data.shipmentReceptionDate.toLocaleString(),
          icon: PrimeIcons.BOX,
          color: '#8183f4'
        })
      }
      if (data.shipmentOnRouteDate != undefined) {
        this.events.push({
          status: 'En reparto',
          date: data.shipmentOnRouteDate.toLocaleString(),
          icon: PrimeIcons.CAR,
          color: '#35c4dc'
        })
      }
      if (data.shipmentDeliveryDate != undefined) {
        this.events.push({
          status: 'Entregado',
          date: data.shipmentDeliveryDate.toLocaleString(),
          icon: PrimeIcons.CHECK,
          color: '#35dc35'
        })
      }
    });
  }


  ngOnInit(): void {

  }
}
