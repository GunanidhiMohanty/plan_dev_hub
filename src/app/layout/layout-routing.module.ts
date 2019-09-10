
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

import { ConfigurationsComponent } from './configurations/configurations.component';


const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        children: [

          
           


        ]
    },
    {
        path: 'healthcare',
        component: LayoutComponent,
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule { }
