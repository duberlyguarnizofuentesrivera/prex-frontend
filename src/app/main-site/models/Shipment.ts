import {ShipmentStatus} from "../enums/ShipmentStatus";
import {ShipmentProblem} from "../enums/ShipmentProblem";
import {Client} from "./Client";
import {Receiver} from "./Receiver";
import {SystemUser} from "./SystemUser";
import {Address} from "./Address";

export interface Shipment {
  shipmentId:number;
  shipmentCode:string;
  shipmentNumberOfPackages:number;
  shipmentReceptionDate?:Date;
  shipmentOnRouteDate?:Date;
  shipmentOnReturnDate?:Date;
  shipmentReturnDate?:Date;
  shipmentDeliveryDate?:Date;
  shipmentClient:Client;
  shipmentAddress:Address;
  shipmentReceiver:Receiver;
  shipmentDeliveryTransporter:SystemUser;
  shipmentPickUpTransporter?:SystemUser;
  shipmentReceiverUser:SystemUser;
  shipmentCost:number;
  shipmentPhotoUrls:string[];
  shipmentObservations:string;
  shipmentStatus: ShipmentStatus;
  shipmentProblems: ShipmentProblem;
  shipmentCreationDate:Date;
  shipmentModificationDate:Date;
}
