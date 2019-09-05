import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout"

import { ChartsComponent } from './charts.component';

const routes: Routes = [
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartsRoutingModule {}
