import {Injectable} from '@angular/core';
import {Address} from "../models/Address";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }
  getTestReceiverAddresses(): Address[] {
    return [{
      addressId:23,
      addressRegion:"Lima",
      addressProvince:"Lima",
      addressDistrict:"Los Olivos",
      addressLine:"Av. Los Olivos 123",
      addressObservations:"",
    },
      {
        addressId:24,
        addressRegion:"Lima",
        addressProvince:"Lima",
        addressDistrict:"San Juan de Miraflores",
        addressLine:"Mz. L lt. 12 AAHH Los Tirapiedra",
        addressObservations:"Hay perros bravos",
      },
    ]
  }
  getReceiverAddresses(receiverId: number): Address[] {
    return this.getTestReceiverAddresses();
  }
}
