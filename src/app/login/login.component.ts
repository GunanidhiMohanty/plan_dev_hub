import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../shared/services/APIService';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    constructor(private router: Router, private _APIService: APIService) { }
    public message: string;
    public flag;

    form: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    });

    ngOnInit() { }

    onLogin() {
        if (this.form.value.username == 'admin' && this.form.value.password == 'admin') {
            console.log(this.form.value.username);
            this.router.navigate([""]);
        }
    }
}
