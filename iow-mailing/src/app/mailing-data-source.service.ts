import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


export class Contact {
  code?: string;
  name?: string;
  org?: string;
  orgAddress?: string;
  orgAddress2?: string;
  orgAddress3?: string;
  orgAddress4?: string;
  orgAddress5?: string;
  orgAddress6?: string;
  website?: string;
  postalcode?: string;
  altname?: string;
  civility?: string;
  fullName?: string;
  address?: string;
  address2?: string;
  address3?: string;
  countrycode?: string;
  position?: string;
  dep?: string;
  mail?: string;
  mail2?: string;
  mail3?: string;
  skype?: string;
  phone?: string;
  phone2?: string;
};

const baseUrl = 'api/';

@Injectable({
  providedIn: 'root'
})
export class MailingDataSourceService {

  constructor(private http: HttpClient) { }

  getAll(name?: string): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${baseUrl}contacts?name=${name || ''}`);
  }

  get(id: any): Observable<Contact> {
    return this.http.get(`${baseUrl}contacts/${id}`);
  }
}
