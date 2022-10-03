import {Component, OnInit} from '@angular/core';
import {UserStatus} from "../../enums/UserStatus";
import {ClientType} from "../../enums/ClientType";
import {Client} from "../../models/Client";
import {ClientService} from "../../services/client-service.service";

@Component({
  selector: 'app-search-clients-results-table',
  templateUrl: './search-clients-results-table.component.html',
  styleUrls: ['./search-clients-results-table.component.css']
})
export class SearchClientsResultsTableComponent implements OnInit {
  loading: boolean = false;
  clients: Client[] = [];
  filterClientStatus: string;
  filterClientType: string;
  filterNamesString: string = "";
  clientType: string[];
  statusType: string[];

  constructor(private clientService: ClientService) {
    this.filterClientStatus = "Todos";
    this.filterClientType = "Todos";
    this.filterNamesString = "";
    this.statusType = Object.values(UserStatus);
    this.statusType.unshift("Todos");
    this.clientType = Object.values(ClientType);
    this.clientType.unshift("Todos");

  }

  ngOnInit(): void {
  }

  loadClients() {
    this.loading = true;
    if (this.filterClientStatus == "Todos") {
      this.filterClientStatus = "";
    }
    if (this.filterClientType == "Todos") {
      this.filterClientType = "";
    }

    this.clientService.getClients(this.filterNamesString, this.filterClientStatus, this.filterClientType).subscribe(data => {
      this.clients = data;
      this.loading = false;
    });
  }

}
