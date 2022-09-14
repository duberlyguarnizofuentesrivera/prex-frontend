import {Component, Input, OnInit} from '@angular/core';
import {ShipmentStatus} from "../../enums/ShipmentStatus";
import {ClientType} from "../../enums/ClientType";

@Component({
  selector: 'app-search-shipments-results-table',
  templateUrl: './search-shipments-results-table.component.html',
  styleUrls: ['./search-shipments-results-table.component.css']
})
export class SearchShipmentsResultsTableComponent implements OnInit {
  shipments: any[];
  filtersVisibilityClass: string = "hidden";
  shipmentStatus: any[];
  dateFilters: any[];
  clientType: any[];
  selectedShipmentStatus: string;
  selectedClientType: any;
  selectedDateFilter: any;

  @Input()
  showFilters: boolean = false;

  constructor() {
    this.shipmentStatus = Object.values(ShipmentStatus);
    console.log("shipmentStatus:");
    console.log(this.shipmentStatus);
    console.log("values");
    console.log(Object.values(ShipmentStatus));
    console.log("keys");
    console.log(Object.keys(ShipmentStatus));

    this.selectedShipmentStatus = ShipmentStatus.RECEIVED;

    this.dateFilters = [
      {id: 1, name: "Todos"},
      {id: 2, name: "Hoy"},
      {id: 3, name: "Últimos 7 días"},
      {id: 4, name: "Últimos 30 días"},
      {id: 5, name: "Más de 30 días"}
    ];
    this.clientType = Object.values(ClientType);

    this.shipments = [{
      "ticket": "AB-6578",
      "code": "AB-6578-1",
      "destination": "Juan Manuel Perez De Cuellar",
      "province": "Lima",
      "district": "Los Olivos",
      "date": "2020-01-01",
      "status": "Recibido",
      "photos_url": ["ab65781.jpg", "ab65782.jpg", "ab65783.jpg"]
    },
      {
        "ticket": "AB-6578",
        "code": "AB-6578-2",
        "destination": "Luz Maria Anda",
        "province": "Lima",
        "district": "Villa El Salvador",
        "date": "2020-01-01",
        "status": "Recibido",
        "photos_url": ["ab65781.jpg"]
      },
      {
        "ticket": "AB-6592",
        "code": "AB-6592-1",
        "destination": "Monique Pardo Ugarteche",
        "province": "Barranca",
        "district": "Barranca",
        "date": "2020-02-01",
        "status": "En camino"
      }]
  }

  ngOnInit(): void {
    if (this.showFilters) {
      this.filtersVisibilityClass = 'block';
    }

  }

}
