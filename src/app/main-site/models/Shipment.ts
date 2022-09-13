import {ShipmentStatus} from "../enums/ShipmentStatus";
import {ShipmentProblem} from "../enums/ShipmentProblem";
import {Client} from "./Client";
import {Receiver} from "./Receiver";
import {SystemUser} from "./SystemUser";


export interface Shipment {
  shipmentId:number;
  shipmentNumberOfPackages:number;
  shipmentReceptionDate:Date;
  shipmentDeliveryDate:Date;
  shipmentClient:Client;
  shipmentReceiver:Receiver;
  shipmentDeliveryTransporter:SystemUser;
  shipmentPickUpTransporter:SystemUser;
  shipmentReceiverUser:SystemUser;
  shipmentCost:number;
  shipmentPhotoUrls:string[];
  shipmentObservations:string;
  shipmentStatus: ShipmentStatus;
  shipmentProblems: ShipmentProblem;
  shipmentCreationDate:Date;
  shipmentModificationDate:Date;
}
