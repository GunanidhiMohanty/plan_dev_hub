import { Provider } from './../../shared/modals/provider';
import { APIService } from './../../shared/services/APIService';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';




@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
    // bar chart
    @Input() heroes: string[];
    @Input() showMuleApi:boolean;
    public  url: string;
    public token: string;
    public isExcel = false;;
    fullImagePath: string;
    public provider: Provider;
    constructor(private _APIService:APIService) {

    }
    
    doStuff() {
        this.isExcel = true;
    }
    openMule(){
        this._APIService.getLoggedinUser(this.url,this.token).subscribe(
            (data) => { //this.provider= data;
                console.log(data);
            }
            );  
    }
    ngOnInit() {
    this.fullImagePath='../../../assets/API-icon.png';
        this._APIService.get()
            .subscribe(
            (data:Provider) => { //this.provider= data;
                 this.url = data[0].assetUrl;
                 this.token = data[0].assetLink;
                  this.provider=data;
                  console.log(this.heroes);
            }
            );  
     }

}