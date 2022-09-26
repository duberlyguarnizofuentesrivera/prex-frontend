import {Injectable} from '@angular/core';
import {Receiver} from "../models/Receiver";
import {AddressServiceService} from "./address-service.service";

@Injectable({
  providedIn: 'root'
})
export class ReceiverServiceService {

  constructor(private addressService: AddressServiceService) {
  }

  getTestReceiverDetail(): Receiver {
    return {
      receiverId: 2,
      receiverIsCompany: true,
      receiverNames: "La Negativa SAC",
      receiverIdNumber: "20456325857",
      receiverPhone: "016689754",
      receiverEmail: "contacto@lanegativa.com.pe",
      receiverAddress: this.addressService.getReceiverAddresses(0),
      receiverContactName: "Mantín Gonzales",
    }
  }
  getReceiverDetail(receiverId: number): Receiver {
    return this.getTestReceiverDetail();
  }
}
