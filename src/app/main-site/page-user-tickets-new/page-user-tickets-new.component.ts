import {Component, OnInit} from '@angular/core';
import {LocationService} from "../services/location-service.service";

@Component({
  selector: 'app-page-user-tickets-new',
  templateUrl: './page-user-tickets-new.component.html',
  styleUrls: ['./page-user-tickets-new.component.css']
})
export class PageUserTicketsNewComponent implements OnInit {
  region: string;
  province: string;
  district: string;
  regionResults: string[];
  provinceResults: string[];
  districtResults: string[];
  isPickUp: boolean;
  validCitySelection: boolean;

  constructor(private locationService: LocationService) {
    this.region = '';
    this.province = '';
    this.district = '';
    this.regionResults = [];
    this.provinceResults = [];
    this.districtResults = [];
    this.isPickUp = false;
    this.validCitySelection = false;
  }

  ngOnInit(): void {
  }

  searchRegion(event: { query: string; }) {
    this.regionResults = this.locationService.getRegions().filter(region => region.toLowerCase().indexOf(event.query.toLowerCase()) == 0);
  }

  searchProvince(event: { query: string; }) {
    // @ts-ignore
    this.provinceResults = this.locationService.getProvinces(this.region).filter(province => province.toLowerCase().indexOf(event.query.toLowerCase()) == 0);
  }

  searchDistrict(event: { query: string; }) {
    // @ts-ignore
    this.districtResults = this.locationService.getDistricts(this.region, this.province).filter(district => district.toLowerCase().indexOf(event.query.toLowerCase()) == 0);
  }

  validateCity() {
    try {
      this.validCitySelection = this.locationService.validSelection(this.region, this.province, this.district);
    }catch (e) {
      this.validCitySelection = false;
    }
  }
}
