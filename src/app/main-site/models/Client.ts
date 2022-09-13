import {UserStatus} from "../enums/UserStatus";

export interface Client {
  clientId:number;
  clientIdNumber:string;
  clientIsCompany:boolean;
  clientContactName:string;
  clientPickUpAddress:string;
  clientNames:string;
  clientPhone:string;
  clientEmail:string;
  clientCreationDate:Date;
  clientModificationDate:Date;
  clientStatus:UserStatus;
}
