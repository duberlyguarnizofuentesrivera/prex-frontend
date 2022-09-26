import {Injectable} from '@angular/core';
import {Client} from "../models/Client";
import {UserStatus} from "../enums/UserStatus";
import {AddressServiceService} from "./address-service.service";

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private addressService:AddressServiceService) { }
  getTestClientDetail(): Client {
    return{
      clientId:2,
      clientIdNumber:"43558020",
      clientIsCompany:false,
      clientContactName:"",
      clientPickUpAddress:this.addressService.getReceiverAddresses(2),
      clientNames:"Johana María Valverde Perez",
      clientPhone:"987654321",
      clientEmail:"johanavp@gmail.com",
      clientCreationDate:new Date("2021-07-10"),
      clientModificationDate:new Date("2021-07-10"),
      clientStatus:UserStatus.ACTIVE,
    }
  }
  getClientDetail(clientIdNumber: number): Client {
    return this.getTestClientDetail();
  }
}
