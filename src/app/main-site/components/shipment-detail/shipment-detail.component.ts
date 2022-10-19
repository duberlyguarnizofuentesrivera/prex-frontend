import {Component, OnInit} from '@angular/core';
import {Shipment} from "../../models/Shipment";
import {ShipmentService} from "../../services/shipment-service.service";
import {MenuItem, PrimeIcons} from "primeng/api";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {DatePipe} from "@angular/common";
import {ShipmentStatus} from "../../enums/ShipmentStatus";
import {ShipmentProblem} from "../../enums/ShipmentProblem";

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
  shipmentProblem = ShipmentProblem;

  constructor(private route: ActivatedRoute, private shipmentService: ShipmentService, private datePipe: DatePipe) {
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
          status: ShipmentStatus.RECEIVED,
          date: this.datePipe.transform(data.shipmentCreationDate, 'dd/MM/yy'),
          icon: PrimeIcons.CALENDAR,
          color: '#f06bac'
        }
      ];
      if (data.shipmentReceptionDate != undefined) {
        this.events.push({
          status: ShipmentStatus.IN_WAREHOUSE,
          date: this.datePipe.transform(data.shipmentReceptionDate, 'dd/MM/yy'),
          icon: PrimeIcons.BOX,
          color: '#8183f4'
        })
      }
      if (data.shipmentOnRouteDate != undefined) {
        this.events.push({
          status: ShipmentStatus.IN_TRANSIT,
          date: this.datePipe.transform(data.shipmentOnRouteDate, 'dd/MM/yy'),
          icon: PrimeIcons.CAR,
          color: '#35c4dc'
        })
      }
      if (data.shipmentOnReturnDate != undefined) {
        this.events.push({
          status: ShipmentStatus.IN_RETURN,
          date: this.datePipe.transform(data.shipmentOnReturnDate, 'dd/MM/yy'),
          icon: PrimeIcons.CAR,
          color: '#ff6259'
        })
      }
      if (data.shipmentReturnDate != undefined) {
        this.events.push({
          status: ShipmentStatus.RETURNED,
          date: this.datePipe.transform(data.shipmentReturnDate, 'dd/MM/yy'),
          icon: PrimeIcons.EXCLAMATION_CIRCLE,
          color: '#ff6259'
        })
      }
      if (data.shipmentDeliveryDate != undefined) {
        this.events.push({
          status: ShipmentStatus.DELIVERED,
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
