import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-user-shipments',
  templateUrl: './page-user-shipments.component.html',
  styleUrls: ['./page-user-shipments.component.css']
})
export class PageUserShipmentsComponent implements OnInit {
 filtersVisibility:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
