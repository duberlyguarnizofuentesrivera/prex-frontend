import {UserStatus} from "../enums/UserStatus";
import {Address} from "./Address";

export interface Client {
  clientId:number;
  clientIdNumber:string;
  clientIsCompany:boolean;
  clientContactName:string;
  clientPickUpAddress:Address[];
  clientNames:string;
  clientPhone:string;
  clientEmail:string;
  clientCreationDate:Date;
  clientModificationDate:Date;
  clientStatus:UserStatus;
}
