import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Brand } from '../models/Brand';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/BrandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiurl = "https://localhost:44372/api/Brands/getall"
  constructor(private httpclient : HttpClient) { }

  getBrands():Observable<BrandResponseModel> {
      return this.httpclient.get<BrandResponseModel>(this.apiurl)
  }
}
