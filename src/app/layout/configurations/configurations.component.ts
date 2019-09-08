import { ApiDetails } from './../../shared/modals/apidetails';

import { Provider } from './../../shared/modals/provider';

import { Component, OnInit } from '@angular/core';
import { APIService, _isExcel, setexcel } from '../../shared/services/APIService';
import { Domains } from '../../shared/modals/domain';



@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss']
})
export class ConfigurationsComponent implements OnInit {
  fullImagePath: string;
  isExcel: boolean = false;
  newProviderList: Array<Provider> = new Array<Provider>();
  //images: Array<string> = new Array<String>;
  public displayComponent;
  public numbers;
  public listDomains: Array<Domains>;
  public filteredFriends: boolean;
  public provider: Provider;
  showMuleApi: boolean;
  public i = 0;
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
      setexcel(true);
      this.showMuleApi = true;

      // this._APIService.setisExcel(true);

    }
    if (value == 'member') {
      this.displayComponent = 'member';
      this.loadValues();
      console.log(this.displayComponent);
      this.showMuleApi = true;
      setexcel(true);
    }
    if (value == 'provider') {
      this.displayComponent = 'provider';
      this.loadValues();
      this.showMuleApi = true;
      setexcel(true);
    }
  }

  ngOnInit() {
    this._APIService.get().subscribe((list: Provider[]) => {
      this.listProvider = list;
      console.log(this.listProvider);
    },
      error => { console.log(error) }
    );
    this._APIService.getLoggedinUser().subscribe((data: Domains[]) => {
      this.listDomainsBackened = data;
      console.log(this.listDomainsBackened);
    });    // this._APIService.apidetails().subscribe((data:Description[])=>{
    //   this.description=data;
    //   console.log(this.description);
    // },
    // error =>{
    //   console.log(error);
    // });

  }



  loadValues() {
    if (this.displayComponent == 'claims') {
      console.log(this.showMuleApi);
      //this._APIService.setisExcel(true);
      this.newCardsList = [];
      this.listDomainsBackened.forEach(obj => {
        obj.lobList.forEach(obj1 => {
          if (obj1.lobName == 'claims') {
            obj1.apiList.forEach(obj2 => {
              this.newCardsList.push(obj2);
            })
            // this.newCardsList=obj1.apidetails;

          }

        })
      });
      this.listDomainsBackened.forEach(obj => {
        obj.lobList.forEach(obj1 => {
          this.listProvider.forEach(provider => {
            obj1.apiList.forEach(obj2 => {
              if (obj2.apiName.trim() === provider.apiName.trim()) {
                obj2.apiDescription = provider.description;
                obj2.isMuleApi = true;
              }
            })

          })
        });
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
            // this.newCardsList=obj1.apidetails;

          }

        })
      });
      this.listDomainsBackened.forEach(obj => {
        obj.lobList.forEach(obj1 => {
          this.listProvider.forEach(provider => {
            obj1.apiList.forEach(obj2 => {
              if (obj2.apiName.trim() === provider.apiName.trim()) {
                obj2.apiDescription = provider.description;
                obj2.isMuleApi = true;
              }
            })

          })
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
            // this.newCardsList=obj1.apidetails;

          }

        })
      });
      this.listDomainsBackened.forEach(obj => {
        obj.lobList.forEach(obj1 => {
          this.listProvider.forEach(provider => {
            obj1.apiList.forEach(obj2 => {
              if (obj2.apiName.trim() === provider.apiName.trim()) {
                obj2.apiDescription = provider.description;
                obj2.isMuleApi = true;
              }
            })

          })
        });
      });

    }
    // show(value){
    //   console.log("emitted");
    //   console.log(value);
    //   this.filteredFriends=value;
    //   if(value==false){
    //     this.isExcel=false;
    //   }
  }
}
