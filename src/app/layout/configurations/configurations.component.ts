import { Description } from './../../shared/modals/description';
import { Provider } from './../../shared/modals/provider';

import { Component, OnInit } from '@angular/core';
import { APIService , _isExcel,setexcel} from '../../shared/services/APIService';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss']
})
export class ConfigurationsComponent implements OnInit {
  fullImagePath: string;
  isExcel: boolean= false;
  newProviderList: Array<Provider> = new Array<Provider>();
  //images: Array<string> = new Array<String>;
  public displayComponent;
  public numbers;
  public filteredFriends:boolean;
  public provider: Provider;
  showMuleApi:boolean;
  public listProvider: Array<Provider>;
  public description:Array<Description>;
  constructor(private _APIService: APIService) {
    this.listProvider = new Array<Provider>();
    this.description = new Array<Description>();
    //  this.numbers = [
    //     {
    //       lob: 'Claims Pricer',
    //       classification: 'Public',
    //       description: 'The Claims endpoint gives clients the ability to submit either Professional (837P) or Institutional (837I) claims, using the same endpoint.',
    //       fullImagePath: '../../../assets/healthcare/claims_pricer.png'
    //     },
    //     {
    //       lob: 'Multi Plan Processor',
    //       classification: 'Private',
    //       description: 'You can assign,update,modify,and cancel multiple plans in a single API call.However,each plan instance can only be given one operation per call.',
    //       fullImagePath: '../../../assets/healthcare/multiplan.png'
    //     },
    //     {
    //       lob: 'Fraud Detection',
    //       classification: 'Public',
    //       description: 'The Fraud Detection is a real-time fraud detection and prevention solution for web-based payment platforms.It must be integrated through a three-phase.',
    //       fullImagePath: '../../../assets/healthcare/fraud.png'
    //     },

    //     {
    //       lob: 'Duplicate Claims',
    //       classification: 'Private',
    //       description: 'Performs rule-based searches for duplicate recordsby using input as an array of sObject, each of which specifies the values to search for and the type of object.',
    //       fullImagePath: '../../../assets/healthcare/dup.png'
    //     },
    //     {
    //       lob: 'Out Of Pocket Liability',
    //       classification: 'Public',
    //       description: 'The Pocket Authentication API uses a variant of OAuth 2.0 for authentication. OAuth 2.0 is meant to be straightforward to implement.',
    //       fullImagePath: '../../../assets/healthcare/liab.png'
    //     },
    //     {
    //       lob: 'Price Claim',
    //       classification: 'Partner',
    //       description: 'The Price Claim API allows you to transmit X12 transactions, schedule appointments into a number of EMRs, and search our curated databases of providers,pricing,and more.',
    //       fullImagePath: '../../../assets/healthcare/price_claim.png'
    //     },
    //     {
    //       lob: 'Provider Paper Check',
    //       classification: 'Private',
    //       description: 'The Print Provider Paper Check API contains the functions that applications use to manage the Windows print spooler & the printers & print jobs it controls.',
    //       fullImagePath: '../../../assets/healthcare/paper_check.png'
    //     },
    //     {
    //       lob: 'Member Out Of Pocket Limit',
    //       classification: 'Private',
    //       description: 'Determine Member Out Of Pocket Limit API calculates the maximum amount a health insurance policyholder will pay for covered healthcare over the course of a policy year.',
    //       fullImagePath: '../../../assets/healthcare/limit.png'
    //     }

    //   ];
  }
  selectedValue(value) {

    if (value == 'claims') {
      this.displayComponent = 'claims';
      this._APIService.setproviderListDisplay(this.newProviderList);
      this.loadValues();
      setexcel(true);
      this.showMuleApi=true;
       
      // this._APIService.setisExcel(true);

    }
    if (value == 'member') {
      this.displayComponent = 'member';
      this.loadValues();
      console.log(this.displayComponent);
      this.showMuleApi=true;
      setexcel(true);
    }
    if (value == 'provider') {
      this.displayComponent = 'provider';
      this.loadValues();
      this.showMuleApi=true;
      setexcel(true);
    }
  }

  ngOnInit() {
    this._APIService.get().subscribe((list: Provider[]) => {
      this.listProvider = list;
    },
      error => { console.log(error) }
    );
    this._APIService.apidetails().subscribe((data:Description[])=>{
      this.description=data;
      console.log(this.description);
    },
    error =>{
      console.log(error);
    });

  }


  
  loadValues() {
      if (this.displayComponent == 'claims') {
        console.log(this.showMuleApi);
       //this._APIService.setisExcel(true);
        this.numbers = [
          {
            lob: 'Claims Pricer',
            classification: 'Public',
            description: '',
            fullImagePath: '../../../assets/healthcare/claims_pricer.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Multi Plan Processor',
            classification: 'Private',
            description: '',
            fullImagePath: '../../../assets/healthcare/multiplan.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Fraud Detection',
            classification: 'Public',
            description: '',
            fullImagePath: '../../../assets/healthcare/fraud.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },

          {
            lob: 'Duplicate Claims',
            classification: 'Private',
            description: '',
            fullImagePath: '../../../assets/healthcare/dup.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Out Of Pocket Liability',
            classification: 'Public',
            description: '',
            fullImagePath: '../../../assets/healthcare/liab.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Price Claim',
            classification: 'Partner',
            description: '',
            fullImagePath: '../../../assets/healthcare/price_claim.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Provider Paper Check',
            classification: 'Private',
            description: '',
            fullImagePath: '../../../assets/healthcare/paper_check.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Member Out Of Pocket Limit',
            classification: 'Private',
            description: '',
            fullImagePath: '../../../assets/healthcare/limit.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          }

        ];
        this.numbers.forEach(obj => {
          this.listProvider.forEach(provider => {
            if (obj.lob.trim() === provider.apiName.trim()) {
              this.newProviderList.push(provider);
              console.log(this.newProviderList);
              obj.description= provider.description;
              obj.isShowMuleApi=true;
            }

          });
        });
        this.numbers.forEach(obj => {
          this.description.forEach(full => {
            if (obj.lob.trim() === full.api_name.trim()) {
              
              obj.fulldescription=full.api_description;
            }
          });
        });
      }
      if (this.displayComponent == 'member') {
        this.numbers = [
          {
            lob: 'Member Eligibility',
            classification: 'Public',
            description:'',
            fullImagePath: '../../../assets/healthcare/member_eligibility.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Member Liability',
            classification: 'Public',
            description:'',
            fullImagePath: '../../../assets/healthcare/liab.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Member Preferences',
            classification: 'Partner',
            description:'',
            fullImagePath: '../../../assets/healthcare/member_prefs.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Activate Account',
            classification: 'Private',
            description:'',
            fullImagePath: '../../../assets/healthcare/activate.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Generate Account Contracts',
            classification: 'Private',
            description:'',
            fullImagePath: '../../../assets/healthcare/contract.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Validate Member Eligibility',
            classification: 'Partner',
            description:'',
            fullImagePath: '../../../assets/healthcare/dup.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Validate Application',
            classification: 'Public',
            description:'',
            fullImagePath: '../../../assets/healthcare/fraud.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Process Membership Reports',
            classification: 'Private',
            description:'',
            fullImagePath: '../../../assets/healthcare/report.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },

        ];
        this.numbers.forEach(obj => {
          this.listProvider.forEach(provider => {
            if (obj.lob.trim() === provider.apiName.trim()) {
              this.newProviderList.push(provider);
              console.log(this.newProviderList);
              obj.description= provider.description;
              obj.isShowMuleApi=true;
            }

          });
        });
        this.numbers.forEach(obj => {
          this.description.forEach(full => {
            if (obj.lob.trim() === full.api_name.trim()) {
              
              obj.fulldescription=full.api_description;
            }
          });
        });
      }
      if (this.displayComponent == 'provider') {
        this.numbers = [
          {
            lob: 'Provider Licenses',
            classification: 'Private',
            description:'',
            fullImagePath: '../../../assets/healthcare/license.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Provider Comments',
            classification: 'Private',
            description:'',
            fullImagePath: '../../../assets/healthcare/report.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Provider Contracts',
            classification: 'Public',
            description:'',
            fullImagePath: '../../../assets/healthcare/contract1.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Provider Termination',
            classification: 'Private',
            description:'',
            fullImagePath: '../../../assets/healthcare/contract.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Provider Contract Updates',
            classification: 'Private',
            description:'',
            fullImagePath: '../../../assets/healthcare/doc.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'National Provider Database Verification',
            classification: 'Private',
            description:'',
            fullImagePath: '../../../assets/healthcare/fraud.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Verify Provider Data',
            classification: 'Private',
            description:'',
            fullImagePath: '../../../assets/healthcare/member_prefs.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },
          {
            lob: 'Receive Applications from Provider',
            classification: 'Private',
            description:'',
            fullImagePath: '../../../assets/healthcare/dr.png',
            isShowMuleApi:false,
            fulldescription:"NA",
          },

        ];
        this.numbers.forEach(obj => {
          this.listProvider.forEach(provider => {
            if (obj.lob.trim() === provider.apiName.trim()) {
              this.newProviderList.push(provider);
              obj.description= provider.description;
              obj.isShowMuleApi=true;
              
            }

          });
        });
        this.numbers.forEach(obj => {
          this.description.forEach(full => {
            if (obj.lob.trim() === full.api_name.trim()) {
              
              obj.fulldescription=full.api_description;
            }
          });
        });
      }

  }
  show(value){
    console.log("emitted");
    console.log(value);
    this.filteredFriends=value;
    if(value==false){
      this.isExcel=false;
    }
  }
}
