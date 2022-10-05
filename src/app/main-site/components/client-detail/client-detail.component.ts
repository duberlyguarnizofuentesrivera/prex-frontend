import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Client} from "../../models/Client";
import {ClientService} from "../../services/client-service.service";

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  clientId!: number;
  clientDetail: Observable<Client>;
  addresses: any[];
  selectedAddress: string="";
  constructor(private route: ActivatedRoute, private clientService: ClientService) {
    const routeParams = this.route.snapshot.paramMap;
    this.clientId = Number(routeParams.get('clientId'));
    this.addresses = [];
    this.clientDetail = this.clientService.getClient(this.clientId);
    this.clientDetail.subscribe((data) => {
      for( let address of data.clientPickUpAddress){
        this.addresses.push({addressLine: address.addressRegion + " - "
            + address.addressProvince + " - "
            + address.addressDistrict + " - "
            + address.addressLine, addressId: address.addressId});
      }
    });
  }

  ngOnInit(): void {
  }

}
