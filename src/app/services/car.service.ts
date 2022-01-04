import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/CarResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiurl = "https://localhost:44372/api/Cars/getall"
  constructor(private httpclient : HttpClient) { }

  getCars(): Observable<CarResponseModel> {
    return this.httpclient.get<CarResponseModel>(this.apiurl)
  }
}
