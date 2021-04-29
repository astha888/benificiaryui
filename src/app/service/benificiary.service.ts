import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../model/api.response';
import { environment } from 'src/environments/environment';
import { Benificiary } from '../model/benificiary.modal';

@Injectable({
  providedIn: 'root'
})
export class BenificiaryService {
  constructor(private http: HttpClient) { }
  baseUrl:string='http://localhost:8080';




  getBenificiary() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }



  registerBenificiary(employee: Benificiary): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, employee);
  }


}

