import {Address} from "./Address";

export interface Receiver {
  receiverId:number;
  receiverIsCompany:boolean;
  receiverNames:string;
  receiverIdNumber:string;
  receiverPhone:string;
  receiverEmail:string;
  receiverAddress:Address;
  receiverContactName:string;
}
