import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {TicketService} from "../../services/ticket-service.service";
import {DatePipe} from "@angular/common";
import {Ticket} from "../../models/Ticket";


@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  ticketId!: number;
  ticketDetail: Observable<Ticket>;
  shipments: any[];
  selectedShipment: string='';

  constructor(private route: ActivatedRoute, private ticketService: TicketService, private datePipe: DatePipe) {
    const routeParams = this.route.snapshot.paramMap;
    this.ticketId = Number(routeParams.get('ticketId'));
    console.log("Ruta:")
    console.log(this.ticketId);
    this.shipments = [];
    this.ticketDetail = this.ticketService.getTicket(this.ticketId);
    this.ticketDetail.subscribe((data) => {
      for(let shipment of data.shipments){
        const shipmentString = shipment.shipmentCode + ", para " + shipment.shipmentReceiver.receiverNames + " (" + shipment.shipmentNumberOfPackages + " paquetes)";
        this.shipments.push(shipmentString);
        console.log(shipmentString)
      }
    });
  }

  ngOnInit(): void {
  }

}
