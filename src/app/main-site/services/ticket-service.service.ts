import {Injectable} from '@angular/core';
import {catchError, map, Observable, retry, throwError} from "rxjs";
import {Ticket} from "../models/Ticket";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {
  }

  getTicket(id: number): Observable<Ticket> {
    return this.http.get<Ticket>('http://localhost:3000/tickets/' + id).pipe(retry(1), catchError(this.handleError));
  }

  getTickets(ticket: string, status: string, payment: string, days: number): Observable<Ticket[]> {
    let ticketString: string = "";
    if (ticket != null && ticket != "") {
      ticketString = "&ticketCode_like=" + ticket;
    }
    let statusString: string = "";
    if (status != null && status != "") {
      statusString = "&ticketStatus=" + encodeURIComponent(status);
    }
    let paymentString: string = "";
    if (payment != null && payment != '') {
      paymentString = "&ticketPaymentStatus=" + encodeURIComponent(payment);
    }
    let url = "http://localhost:3000/tickets?" + ticketString + statusString + paymentString;
    console.log(url);
    //TODO: This filter is filtering in the client side, it must be done in the server side...
    return this.http.get<Ticket[]>(url).pipe(retry(1), catchError(this.handleError), map(tickets => tickets.filter(tickets => {
      const d = new Date(String(tickets.ticketModificationDate));
      const today = new Date();
      const daysDiff = Math.floor((today.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
      console.log("days is: " + days);
      // days=1 -> all
      if (days == 2) {
        return daysDiff == 0;
      }
      if (days == 3) {
        return daysDiff < 7;
      }
      if (days == 4) {
        return daysDiff < 30;
      }
      if (days == 5) {
        return daysDiff > 30;
      }
      return true;
    })));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  addTicket(ticket: Ticket) {
    return this.http.post<Ticket>('http://localhost:3000/tickets', ticket).pipe(retry(1), catchError(this.handleError));
  }
}
