import {Component, OnInit} from '@angular/core';
import {UserStatus} from "../../enums/UserStatus";
import {Receiver} from "../../models/Receiver";
import {ReceiverService} from "../../services/receiver-service.service";
import {ClientType} from "../../enums/ClientType";

@Component({
  selector: 'app-search-receivers-results-table',
  templateUrl: './search-receivers-results-table.component.html',
  styleUrls: ['./search-receivers-results-table.component.css']
})
export class SearchReceiversResultsTableComponent implements OnInit {
  loading: boolean = false;
  receivers: Receiver[] = [];
  filterReceiverStatus: string;
  filterReceiverType: string;
  filterNamesString: string = "";
  statusType: string[];
  receiverType: string[];

  constructor(private receiverService: ReceiverService) {
    this.filterReceiverStatus = "Todos";
    this.filterReceiverType = "Todos";
    this.filterNamesString = "";
    this.statusType = Object.values(UserStatus);
    this.statusType.unshift("Todos");
    this.receiverType = Object.values(ClientType);
    this.receiverType.unshift("Todos");

  }

  ngOnInit(): void {
  }

  loadReceivers() {
    this.loading = true;
    if (this.filterReceiverStatus == "Todos") {
      this.filterReceiverStatus = "";
    }
    if (this.filterReceiverType == "Todos") {
      this.filterReceiverType = "";
    }

    this.receiverService.getReceivers(this.filterNamesString, this.filterReceiverStatus, this.filterReceiverType).subscribe(data => {
      this.receivers = data;
      this.loading = false;
    });
  }

  identity(value: any): Receiver {
    return value as Receiver;
  }

}
