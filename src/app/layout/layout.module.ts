import { LoginComponent } from './login/login.component';

import { ChartsComponent } from './charts/charts.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatExpansionModule,
    MatAccordion,
    MatDialogModule,
    
    
    
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigurationsComponent } from './configurations/configurations.component';
@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        TranslateModule,
        MatButtonModule,
        MatCardModule,
        FormsModule,
        MatTableModule,
        MatExpansionModule,
        MatDialogModule
        
        
    ],
   
  declarations: [LayoutComponent, ChartsComponent, TopnavComponent,  ConfigurationsComponent,ChartsComponent,LoginComponent]
    
})
export class LayoutModule {}
