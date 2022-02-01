import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PublicAnalysisRoutingModule } from './public-analysis-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { SharedModule } from 'src/app/modules/shared/shared.module';

// Container
import { PublicAnalysisComponent } from './public-analysis.component';


@NgModule({
  declarations: [
    PublicAnalysisComponent
  ],
  imports: [
    CommonModule,
    PublicAnalysisRoutingModule,
    HighchartsChartModule,
    SharedModule
  ]
})
export class PublicAnalysisModule { }
