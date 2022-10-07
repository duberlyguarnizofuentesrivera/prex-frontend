import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "../../models/Ticket";
import {TicketStatus} from "../../enums/TicketStatus";
import {TicketService} from "../../services/ticket-service.service";
import {TicketPaymentStatus} from "../../enums/TicketPaymentStatus";

@Component({
  selector: 'app-search-tickets-results-table',
  templateUrl: './search-tickets-results-table.component.html',
  styleUrls: ['./search-tickets-results-table.component.css']
})
export class SearchTicketsResultsTableComponent implements OnInit {
  tickets: Ticket[];
  filtersVisibilityClass: string = "hidden";
  ticketStatus: any[];
  ticketPaymentStatus: any[];
  dateFilters: any[];
  filterDateNumber: any;
  loading: boolean = false;
  filterTicket: string;
  filterTicketStatus: string;
  filterPaymentStatus: string ;

  @Input()
  showFilters: boolean = false;

  constructor(private ticketService: TicketService) {
    this.ticketStatus = Object.values(TicketStatus);
    this.ticketStatus.unshift("Todos");
    this.ticketPaymentStatus = Object.values(TicketPaymentStatus);
    this.ticketPaymentStatus.unshift("Todos");
    console.log(this.ticketStatus);
    this.tickets = [];
    this.filterTicket = "";
    this.filterTicketStatus = "";
    this.filterPaymentStatus = "";
    this.filterDateNumber = {id: 1, name: "Todos"};

    this.dateFilters = [
      {id: 1, name: "Todos"},
      {id: 2, name: "Hoy"},
      {id: 3, name: "Últimos 7 días"},
      {id: 4, name: "Últimos 30 días"},
      {id: 5, name: "Más de 30 días"}
    ];

  }

  ngOnInit(): void {
    if (this.showFilters) {
      this.filtersVisibilityClass = 'block';
    }
    this.loading = true;

  }

  loadTickets() {
    this.loading = true;
    if (this.filterTicketStatus == "Todos") {
      this.filterTicketStatus = "";
    }
    console.log(this.filterDateNumber);
    this.ticketService.getTickets(this.filterTicket, this.filterTicketStatus, this.filterPaymentStatus, this.filterDateNumber.id).subscribe(data => {
      this.tickets = data;
      this.loading = false;
    });
  }

  identity(value: any): Ticket {
    return value as Ticket;
  }

}
