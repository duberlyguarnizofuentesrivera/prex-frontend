import {Shipment} from "./Shipment";
import {Client} from "./Client";
import {SystemUser} from "./SystemUser";
import {TicketStatus} from "../enums/TicketStatus";
import {TicketPaymentStatus} from "../enums/TicketPaymentStatus";

export interface Ticket {
  ticketId:number;
  shipments:Shipment[];
  ticketTotalCost:number;
  ticketClient: Client;
  ticketSystemUser:SystemUser;
  ticketCreationDate:Date;
  ticketModificationDate:Date;
  ticketStatus: TicketStatus;
  ticketPaymentStatus: TicketPaymentStatus;
}
