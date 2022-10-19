import {Injectable} from '@angular/core';
import {Address} from "../models/Address";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) {

  }

  getTestReceiverAddresses(): Address[] {
    return [{
      addressId: 23,
      addressRegion: "Lima",
      addressProvince: "Lima",
      addressDistrict: "Los Olivos",
      addressLine: "Av. Los Olivos 123",
      addressObservations: "",
    },
      {
        addressId: 24,
        addressRegion: "Lima",
        addressProvince: "Lima",
        addressDistrict: "San Juan de Miraflores",
        addressLine: "Mz. L lt. 12 AAHH Los Tirapiedra",
        addressObservations: "Hay perros bravos",
      },
    ]
  }

  getReceiverAddresses(receiverId: number): Observable<Address[]> {
    const url = `http://localhost:3000/api/address/${receiverId}`;
    return this.http.get<Address[]>(url).pipe(retry(1), catchError(this.handleError));
  }

  getAddress(addressId: number): Observable<Address> {
    const url = `http://localhost:3000/api/address/${addressId}`;
    return this.http.get<Address>(url).pipe(retry(1), catchError(this.handleError));
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

  addAddress(newAddress: Address):Observable<Address> {
    return this.http.post<Address>('http://localhost:3000/api/address', newAddress).pipe(retry(1), catchError(this.handleError));
  }
}
