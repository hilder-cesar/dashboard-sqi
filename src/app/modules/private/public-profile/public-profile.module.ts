import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PublicProfileRoutingModule } from './public-profile-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';

// Container
import { PublicProfileComponent } from './public-profile.component';


@NgModule({
  declarations: [
    PublicProfileComponent
  ],
  imports: [
    CommonModule,
    PublicProfileRoutingModule,
    HighchartsChartModule
  ]
})
export class PublicProfileModule { }
