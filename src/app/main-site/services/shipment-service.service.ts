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

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
