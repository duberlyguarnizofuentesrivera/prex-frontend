import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Receiver} from "../../models/Receiver";
import {ActivatedRoute} from "@angular/router";
import {ReceiverService} from "../../services/receiver-service.service";

@Component({
  selector: 'app-receiver-detail',
  templateUrl: './receiver-detail.component.html',
  styleUrls: ['./receiver-detail.component.css']
})
export class ReceiverDetailComponent implements OnInit {

  receiverId!: number;
  receiverDetail: Observable<Receiver>;
  addresses: any[];
  selectedAddress: string="";
  constructor(private route: ActivatedRoute, private receiverService: ReceiverService) {
    const routeParams = this.route.snapshot.paramMap;
    this.receiverId = Number(routeParams.get('receiverId'));
    this.addresses = [];
    this.receiverDetail = this.receiverService.getReceiver(this.receiverId);
    this.receiverDetail.subscribe((data) => {
      for( let address of data.receiverAddress){
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
