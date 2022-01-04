import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/ColorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiurl = "https://localhost:44372/api/colors/getall"

  constructor(private httpclient : HttpClient) { }

  getColors() : Observable<ColorResponseModel>{
    return this.httpclient.get<ColorResponseModel>(this.apiurl);
  }
}
