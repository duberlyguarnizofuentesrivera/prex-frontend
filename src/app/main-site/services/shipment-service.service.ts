import {Injectable} from '@angular/core';
import {Shipment} from "../models/Shipment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  result: Shipment[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  constructor(private http: HttpClient) {
    this.result = [];
  }

  getShipment(id: number): Observable<Shipment> {
    return this.http.get<Shipment>('http://localhost:3000/shipments/' + id).pipe(retry(1), catchError(this.handleError));
  }

  getShipments(ticket: string, status: string, location: string, days:number): Observable<Shipment[]> {
    let ticketString: string = "";
    if (ticket != null && ticket != "") {
      ticketString = "&shipmentCode_like=" + ticket;
    }
    let statusString: string = "";
    if (status != null && status != "") {
      statusString = "&shipmentStatus=" + encodeURIComponent(status);
    }
    let locationString: string = "";
    if (location != null && location != '') {
      locationString = "&shipmentAddress.addressDistrict_like=" + location;
    }
    let url = "http://localhost:3000/shipments?" + ticketString + statusString + locationString;
    console.log(url);
    //Todo: This filter is filtering in the client side, it must be done in the server side...
    return this.http.get<Shipment[]>(url).pipe(retry(1), catchError(this.handleError), map(shipments=>shipments.filter(shipment => {
      const d =new Date(String(shipment.shipmentReceptionDate));
      const today = new Date();
      const daysDiff = Math.floor((today.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
      // days=1 -> all
      if(days == 2){
        return daysDiff == 0;
      }
      if(days == 3){
        return daysDiff < 7;
      }
      if(days == 4){
        return daysDiff < 30;
      }
      if(days == 5){
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

}
