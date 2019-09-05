import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ChartsRoutingModule,
        Ng2Charts,
        MatCardModule,
        MatGridListModule,
        FormsModule,
    ],
    declarations: [ChartsComponent],
    bootstrap: [ChartsComponent],
    
})
export class ChartsModule {}
