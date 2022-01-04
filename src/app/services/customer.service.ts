import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/CustomerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiurl = "https://localhost:44372/api/Users/getall"
  constructor(private httpclient : HttpClient) { }

  getCustomers() : Observable<CustomerResponseModel>{
    return this.httpclient.get<CustomerResponseModel>(this.apiurl)
  }
}
