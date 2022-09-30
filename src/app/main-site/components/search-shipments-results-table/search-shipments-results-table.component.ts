import {Component, Input, OnInit} from '@angular/core';
import {ShipmentStatus} from "../../enums/ShipmentStatus";
import {Shipment} from "../../models/Shipment";
import {ShipmentServiceService} from "../../services/shipment-service.service";

@Component({
  selector: 'app-search-shipments-results-table',
  templateUrl: './search-shipments-results-table.component.html',
  styleUrls: ['./search-shipments-results-table.component.css']
})
export class SearchShipmentsResultsTableComponent implements OnInit {
  shipments: Shipment[];
  filtersVisibilityClass: string = "hidden";
  shipmentStatus: any[];
  dateFilters: any[];
  filterShipmentStatus: string;
  filterDateFilter: any;
  loading: boolean = false;
  filterTicketString: string = "";
  filterLocationString: string = "";

  @Input()
  showFilters: boolean = false;

  constructor(private shipmentService: ShipmentServiceService) {
    this.shipmentStatus = Object.values(ShipmentStatus);
    this.shipments = [];

    this.filterShipmentStatus = "";

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
  loadShipments() {
    this.loading = true;
    this.shipmentService.getShipments(this.filterTicketString, this.filterShipmentStatus, this.filterLocationString).subscribe(data=> {
      this.shipments = data;
      this.loading = false;
    });
  }
}
