import {Component, OnInit} from '@angular/core';
import {UserStatus} from "../../enums/UserStatus";
import {ClientType} from "../../enums/ClientType";

@Component({
  selector: 'app-search-clients-results-table',
  templateUrl: './search-clients-results-table.component.html',
  styleUrls: ['./search-clients-results-table.component.css']
})
export class SearchClientsResultsTableComponent implements OnInit {

  clients:any[];
  selectedClient:any;
  selectedStatusType:any;
  selectedClientType:any;
  clientType:string[];
  statusType:string[];
  constructor() {
    this.selectedClient = "1";
    this.selectedStatusType = "1";
    this.selectedClientType = "1";
    this.clients=[
      {id:1, idNumber:'20658955427', name:'La Solucionadora SAC', phone:'015689874', status:UserStatus.ACTIVE},
      {id:2, idNumber:'45826654', name:'Pedrito Sanchez Rosario', phone:'987654321', status:UserStatus.ACTIVE},
      {id:3, idNumber:'20665895424', name:'Inversiones Dugleisy Chamancia', phone:'976854325', status:UserStatus.ACTIVE},
      {id:4, idNumber:'72689545', name:'Rosalía Bailamucho Fiestoncia', phone:'963985741', status:UserStatus.INACTIVE},
    ]
    this.statusType = Object.values(UserStatus);
    this.clientType = Object.values(ClientType);
  }

  ngOnInit(): void {
  }

}
