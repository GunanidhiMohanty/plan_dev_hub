import { Provider } from './../../shared/modals/provider';
import { APIService, _isExcel, setexcel } from './../../shared/services/APIService';
import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
    @Input() cardsList: any;
    public cardClicked: string;
    public url: string;
    public token: string;
    public isMuleApi: boolean;
    fullImagePath: string;
    public provider: Provider;
    description: string;
    constructor(private _APIService: APIService) {
    }
    countryCodes() {
        return _isExcel;
    }
    diaplayDescription(value, value1) {
        setexcel(false);
        this.cardClicked = value;
        this.isMuleApi = value1;
        this._APIService.apidetails().subscribe(data => this.description = data);

    }
    ngOnInit() {
        this.fullImagePath='../../../assets/API-icon.png'
        this._APIService.get()
            .subscribe(
                (data: Provider) => {
                    this.url = data[0].assetUrl;
                    this.token = data[0].assetLink;
                    this.provider = data;
                }
            );
    }

}