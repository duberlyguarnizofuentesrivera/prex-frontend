import {Component, OnInit} from '@angular/core';
import {UserStatus} from "../../enums/UserStatus";
import {ClientType} from "../../enums/ClientType";

@Component({
  selector: 'app-search-receivers-results-table',
  templateUrl: './search-receivers-results-table.component.html',
  styleUrls: ['./search-receivers-results-table.component.css']
})
export class SearchReceiversResultsTableComponent implements OnInit {
  receivers:any[];
  selectedReceiver:any;
  selectedStatusType:any;
  selectedReceiverType:any;
  receiverType:string[];
  statusType:string[];
  constructor() {
    this.selectedReceiver = "1";
    this.selectedStatusType = "1";
    this.selectedReceiverType = "1";
    this.receivers=[
      {id:1, idNumber:'20658955427', name:'La Solucionadora SAC', phone:'015689874', region:'Lima', province:'Lima', district:'San Isidro'},
      {id:2, idNumber:'45826654', name:'Pedrito Sanchez Rosario', phone:'987654321', region: 'Lima', province:'Lima', district:'Los Olivos'},
      {id:3, idNumber:'20665895424', name:'Inversiones Dugleisy Chamancia', phone:'976854325', region: 'Lima', province:'Barranca', district:'Barranca'},
      {id:4, idNumber:'72689545', name:'Rosalía Bailamucho Fiestoncia', phone:'963985741', region: 'Lima', province:'Lima', district:'San Juan de Miraflores'},
    ]
    this.statusType = Object.values(UserStatus);
    this.receiverType = Object.values(ClientType);
  }

  ngOnInit(): void {
  }

}
