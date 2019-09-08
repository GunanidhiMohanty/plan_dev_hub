import { Provider } from './../modals/provider';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { } from '@angular/http';
import { Observable } from 'rxjs';

export var _isExcel:boolean=true;
export function setexcel(val: boolean) {
  _isExcel = val;
}
@Injectable()
export class APIService {
    apidetails(): any {
      return this.httpClient.get('http://10.21.201.161:8080/getApi');
    }
  constructor(private httpClient: HttpClient, private http: Http) { }
  private _providerListDisplay: Array<Provider> = new Array<Provider>();
  public getproviderListDisplay(): Array<Provider> {
    return this._providerListDisplay;
  }
  public setproviderListDisplay(value: Array<Provider>) {
    this._providerListDisplay = value;
  }

  get(){
    const creditentials = { username:'vmorasa1',password:'Addanki@2662'};
    
    return this.httpClient.post("http://api-retrieveassets-exchange-dev.us-e2.cloudhub.io/organization/portal/assets",creditentials)
    // let headers = new HttpHeaders();
    // headers = headers.set('username', 'GMM1');
    // headers = headers.set('password', 'password');
   
    // headers = headers.append('Access-Control-Allow-Origin','POST, GET, PUT, DELETE, OPTIONS');
    // headers = headers.append('Access-Control-Allow-Methods','POST, GET, PUT, DELETE, OPTIONS');
    //this.createAuthorizationHeader(headers);
    
    
    //http://api-retrieveassets-exchange.us-e2.cloudhub.io/organization/portal/assets

    //    this.http.get('http://api-mule-exchange.us-e2.cloudhub.io/portal/assets/1234');
  }
 getLoggedinUser(){
  // return this.httpClient.get(url, {
  //   headers: new HttpHeaders({
  //     'Authorization': 'Bearer '+ token
  //   })
  // })
 
  return this.httpClient.get('http://localhost:8080/getApi/Healthcare');
 }
} 
