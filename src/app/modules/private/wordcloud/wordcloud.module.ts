import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { WordcloudRoutingModule } from './wordcloud-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';

// Container
import { WordcloudComponent } from './wordcloud.component';


@NgModule({
  declarations: [
    WordcloudComponent
  ],
  imports: [
    CommonModule,
    WordcloudRoutingModule,
    HighchartsChartModule
  ]
})
export class WordcloudModule { }
