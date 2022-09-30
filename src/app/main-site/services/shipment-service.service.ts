import {Injectable} from '@angular/core';
import {Shipment} from "../models/Shipment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShipmentServiceService {
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

  getShipments(ticket: string, status: string, location: string): Observable<Shipment[]> {
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
    return this.http.get<Shipment[]>(url).pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
