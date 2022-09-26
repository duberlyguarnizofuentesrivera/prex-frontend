import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-user-shipments-detail',
  templateUrl: './page-user-shipments-detail.component.html',
  styleUrls: ['./page-user-shipments-detail.component.css']
})
export class PageUserShipmentsDetailComponent implements OnInit {
  shipmentIdFromRoute: string;
  constructor(private route: ActivatedRoute) {
    this.shipmentIdFromRoute = "";
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.shipmentIdFromRoute = String(routeParams.get('shipmentId'));
  }
}
