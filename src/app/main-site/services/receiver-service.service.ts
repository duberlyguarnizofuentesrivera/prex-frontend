import {Injectable} from '@angular/core';
import {Receiver} from "../models/Receiver";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReceiverService {

  constructor(private http: HttpClient) {
  }


  getReceiver(receiverId: number): Observable<Receiver> {
    let url = "http://localhost:3001/receivers/" + receiverId;
    return this.http.get<Receiver>(url).pipe(retry(1), catchError(this.handleError));
  }

  getReceivers(name: string, status: string, type: string): Observable<Receiver[]> {
    let nameString = "";
    let statusString = "";
    let typeString = "";
    if (name != null && name != "") {
      nameString = "&receiverNames_like=" + name;
    }
    if (status != null && status != "" && status != "Todos") {
      statusString = "&receiverStatus=" + status;
    }
    if (type != null && type != "" && type != "Todos") {
      if (type == "Natural") {
        typeString = "&receiverIsCompany=false";
      } else {
        typeString = "&receiverIsCompany=true";
      }
    }
    const url = 'http://localhost:3001/receivers/?' + nameString + statusString + typeString;
    return this.http.get<Receiver[]>(url).pipe(retry(1), catchError(this.handleError));
  }

  //search functions return array, even if is an array of one object
  getReceiverByDocumentId(receiverIdNumber: string): Observable<Receiver[]> {
    let url = 'http://localhost:3001/receivers/?receiverIdNumber=';
    return this.http.get<Receiver[]>(url + receiverIdNumber).pipe(retry(1), catchError(this.handleError));
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


  addAddressToReceiver(selectedReceiverAddressId: number, addressId: number): Observable<Receiver> {
    let url = "http://localhost:3001/receivers/" + selectedReceiverAddressId;
    return this.http.patch<Receiver>(url, {receiverAddress: addressId}).pipe(retry(1), catchError(this.handleError));
  }
}
