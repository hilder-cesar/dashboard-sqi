import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PropertyDataRoutingModule } from './property-data-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { SharedModule } from 'src/app/modules/shared/shared.module';

// Containers
import { PropertyDataComponent } from './property-data.component';
import { FollowersGrowthComponent } from '../property-data/followers-growth/followers-growth.component';
import { InteractionsComponent } from './interactions/interactions.component';


@NgModule({
  declarations: [
    PropertyDataComponent,
    FollowersGrowthComponent,
    InteractionsComponent
  ],
  imports: [
    CommonModule,
    PropertyDataRoutingModule,
    SharedModule,
    HighchartsChartModule
  ]
})
export class PropertyDataModule { }
