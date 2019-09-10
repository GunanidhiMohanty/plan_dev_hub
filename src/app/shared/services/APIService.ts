import { Provider } from './../modals/provider';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { } from '@angular/http';
export var _isCardDetail: boolean = true;
export function setCardDetail(val: boolean) {
  _isCardDetail = val;
}
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

  get() {
    const creditentials = {
      username: 'vmorasa1',
      password: 'Addanki@2662'
    };

    return this.httpClient.post("http://api-retrieveassets-exchange-qa.us-e2.cloudhub.io/organization/portal/assets", creditentials)
  }
  getLoggedinUser() {
    return this.httpClient.get('http://localhost:8080/getApi/Healthcare');
  }
} 
