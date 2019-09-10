import { ApiDetails } from './../../shared/modals/apidetails';
import { Provider } from './../../shared/modals/provider';
import { Component, OnInit } from '@angular/core';
import { APIService, setCardDetail } from '../../shared/services/APIService';
import { Domains } from '../../shared/modals/domain';



@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss']
})
export class ConfigurationsComponent implements OnInit {
  fullImagePath: string;
  newProviderList: Array<Provider> = new Array<Provider>();
  public displayComponent;
  public listDomains: Array<Domains>;
  public provider: Provider;
  public listProvider: Array<Provider>;
  public newCardsList = [];
  public listDomainsBackened: Array<Domains>;

  constructor(private _APIService: APIService) {

    this.listProvider = new Array<Provider>();
    this.listDomains = new Array<Domains>();
    this.newCardsList = new Array<ApiDetails>();
    this.listDomainsBackened = new Array<Domains>();
  }
  selectedValue(value) {

    if (value == 'claims') {
      this.displayComponent = 'claims';
      this._APIService.setproviderListDisplay(this.newProviderList);
      this.loadValues();
      setCardDetail(true);

    }
    if (value == 'member') {
      this.displayComponent = 'member';
      this.loadValues();
      
      setCardDetail(true);
    }
    if (value == 'provider') {
      this.displayComponent = 'provider';
      this.loadValues();
      setCardDetail(true);
    }
  }

  ngOnInit() {
    this._APIService.get().subscribe((list: Provider[]) => {
      this.listProvider = list;
    },
      error => { console.log(error) }
    );
    this._APIService.getLoggedinUser().subscribe((data: Domains[]) => {
      this.listDomainsBackened = data;
    });
  }



  loadValues() {
    if (this.displayComponent == 'claims') {
      this.newCardsList = [];
      this.listDomainsBackened[0].lobList.forEach(lob => {
        lob.apiList.forEach(apnNm => {
          if (this.listProvider.find(api => (api.apiName.trim() === apnNm.apiName.trim()))) {
            apnNm.muleApi = true;
            apnNm.apiDescription = this.listProvider.find(prov => (prov.apiName.trim() === apnNm.apiName)).description;

          }
        });
      });
      this.listDomainsBackened.forEach(obj => {
        obj.lobList.forEach(obj1 => {
          if (obj1.lobName == 'claims') {
            obj1.apiList.forEach(obj2 => {
              this.newCardsList.push(obj2);
            })

          }

        })
      });


    }
    if (this.displayComponent == 'member') {
      this.newCardsList = [];
      this.listDomainsBackened.forEach(obj => {
        obj.lobList.forEach(obj1 => {
          if (obj1.lobName == 'member') {
            obj1.apiList.forEach(obj2 => {
              this.newCardsList.push(obj2);
            })

          }

        })
      });
      this.listDomainsBackened.forEach(obj => {
        obj.lobList.forEach(obj1 => {
          if (obj1.lobName == 'member') {
            this.listProvider.forEach(provider => {
              obj1.apiList.forEach(obj2 => {
                if (obj2.apiName.trim() === provider.apiName.trim()) {
                  obj2.apiDescription = provider.description;
                  obj2.muleApi = true;
                }
              })

            })
          }
        });

      });
    }
    if (this.displayComponent == 'provider') {
      this.newCardsList = [];
      this.listDomainsBackened.forEach(obj => {
        obj.lobList.forEach(obj1 => {
          if (obj1.lobName == 'provider') {
            obj1.apiList.forEach(obj2 => {
              this.newCardsList.push(obj2);

            })
          }

        })
      });
      this.listDomainsBackened.forEach(obj => {
        obj.lobList.forEach(obj1 => {
          if (obj1.lobName == 'provider') {
            this.listProvider.forEach(provider => {
              obj1.apiList.forEach(obj2 => {
                if (obj2.apiName.trim() === provider.apiName.trim()) {
                  obj2.apiDescription = provider.description;
                  obj2.muleApi = true;
                }
              })

            })
          }
        });

      });

    }
  }
}
