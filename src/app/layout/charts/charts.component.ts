import { Provider } from './../../shared/modals/provider';
import { APIService, _isCardDetail, setCardDetail } from './../../shared/services/APIService';
import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
    @Input() cardsList: any[];
    public cardClicked: string;
    public url: string;
    fullImagePath: string;
    constructor(private _APIService: APIService) {
    }
    countryCodes() {
        return _isCardDetail;
    }
    diaplayDescription(value) {
        setCardDetail(false);
        this.cardClicked = value;

    }
   
    ngOnInit() {
        this.fullImagePath = '../../../assets/API-icon.png'
        this._APIService.get()
            .subscribe(
                (data: Provider) => {
                    this.url = data[0].assetUrl;
                }
            );
    }

}