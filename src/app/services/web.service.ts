import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  _baseURL: string = window.location.origin;
  headers:HttpHeaders
  constructor(private http: HttpClient ) 
  { 
    this.headers = new HttpHeaders('Access-Control-Allow-Origin: *');
    var token:string =String(window["CSRFTOKEN"]);
    this.headers = this.headers.set('token', token);
    this.headers = this.headers.set('method', 'POST');
    this.headers = this.headers.set('Access-Control-Allow-Methods', 'POST');
  }
  
  GetProperties(ObjList:any[],GetFor:number){
    return this.http.post<any>("../CRMgr/GetProperties",{ObjList:ObjList,GetInfoFor:GetFor}, { headers: this.headers });
  }

  getData(){
    return this.http.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001');
  }
}