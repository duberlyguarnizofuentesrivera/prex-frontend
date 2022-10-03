import {Injectable} from '@angular/core';
import {Client} from "../models/Client";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  getClient(clientIdNumber: number): Observable<Client> {
    return this.http.get<Client>('http://localhost:3000/clients/' + clientIdNumber).pipe(retry(1), catchError(this.handleError));
  }

  getClients(name: string, status: string, type: string): Observable<Client[]> {
    let nameString = "";
    let statusString = "";
    let typeString = "";
    if(name != null && name != ""){
      nameString = "&clientNames_like=" + name;
    }
    if(status != null && status != "" && status!="Todos"){
      statusString = "&clientStatus=" + status;
    }
    if(type != null && type != "" && type!="Todos"){
      if(type == "Natural"){
      typeString = "&clientIsCompany=false" ;
      }else{
        typeString = "&clientIsCompany=true" ;
      }
    }
    const url = 'http://localhost:3000/clients/?' + nameString + statusString + typeString;
    return this.http.get<Client[]>(url ).pipe(retry(1), catchError(this.handleError));
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
