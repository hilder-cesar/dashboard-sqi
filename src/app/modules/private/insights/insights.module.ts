import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { InsightsRoutingModule } from './insights-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';

// Container
import { InsightsComponent } from './insights.component';

@NgModule({
  declarations: [
    InsightsComponent
  ],
  imports: [
    CommonModule,
    InsightsRoutingModule,
    HighchartsChartModule,
    SharedModule
  ]
})
export class InsightsModule { }
