import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { QualitativeRoutingModule } from './qualitative-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';

// Container
import { QualitativeComponent } from './qualitative.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SentimentComponent } from './components/sentiment/sentiment.component';
import { SentimentHourComponent } from './components/sentiment-hour/sentiment-hour.component';
import { TopSubjectsComponent } from './components/top-subjects/top-subjects.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    QualitativeComponent,
    SentimentComponent,
    SentimentHourComponent,
    TopSubjectsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    QualitativeRoutingModule,
    HighchartsChartModule,
    SharedModule
  ]
})
export class QualitativeModule { }
