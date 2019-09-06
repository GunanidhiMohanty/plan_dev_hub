import { Provider } from './../../shared/modals/provider';
import { APIService, _isExcel, setexcel } from './../../shared/services/APIService';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
    // bar chart
    @Input() heroes: string[];
    @Input() isExcel: boolean;
    @Output() flag: EventEmitter<any> = new EventEmitter();
    public dumy: string;
    public url: string;
    public token: string;
    //public isExcel = false;
    fullImagePath: string;
    public provider: Provider;
    description: string;
    constructor(private _APIService: APIService) {
    }
    countryCodes() {
        return _isExcel;
    }
    doStuff(value) {
        setexcel(false);
        //this.flag= false;
        console.log("Hi dostuff ");
        console.log(_isExcel);
        console.log(value);
        this.dumy=value;
        console.log();
        // this.flag.emit(false);
        this._APIService.apidetails().subscribe(data => this.description = data);
        


    }
    openMule() {
        this._APIService.getLoggedinUser(this.url, this.token).subscribe(
            (data) => { //this.provider= data;
                console.log(data);
            }
        );
    }
    ngOnInit() {

        this.fullImagePath = '../../../assets/API-icon.png';
        console.log("called again");
        console.log(this.flag);
        this._APIService.get()
            .subscribe(
                (data: Provider) => { //this.provider= data;
                    this.url = data[0].assetUrl;
                    this.token = data[0].assetLink;
                    this.provider = data;
                    console.log(this.heroes);
                }
            );
    }

}