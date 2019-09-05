import { Provider } from './../modals/provider';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIService {
  constructor(private httpClient: HttpClient, private http: Http) { }
  private _providerListDisplay: Array<Provider> = new Array<Provider>();
  public getproviderListDisplay(): Array<Provider> {
    return this._providerListDisplay;
  }
  public setproviderListDisplay(value: Array<Provider>) {
    this._providerListDisplay = value;
  }

  get(){
    // let headers = new HttpHeaders();
    // headers = headers.set('username', 'GMM1');
    // headers = headers.set('password', 'password');
   
    // headers = headers.append('Access-Control-Allow-Origin','POST, GET, PUT, DELETE, OPTIONS');
    // headers = headers.append('Access-Control-Allow-Methods','POST, GET, PUT, DELETE, OPTIONS');
    //this.createAuthorizationHeader(headers);
    
    return this.httpClient.get("http://api-retrieveassets-exchange.us-e2.cloudhub.io/organization/portal/assets", {
      headers: new HttpHeaders({
        'username': 'GMM1',
        'password': 'Saibabagr8'
      })
    }) 
    //http://api-retrieveassets-exchange.us-e2.cloudhub.io/organization/portal/assets

    //    this.http.get('http://api-mule-exchange.us-e2.cloudhub.io/portal/assets/1234');
  }
 getLoggedinUser(url,token){
  // return this.httpClient.get(url, {
  //   headers: new HttpHeaders({
  //     'Authorization': 'Bearer '+ token
  //   })
  // })
  return this.httpClient.get('http://10.31.91.46:8080');
 }
} 
