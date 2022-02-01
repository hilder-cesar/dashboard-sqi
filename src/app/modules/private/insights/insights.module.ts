import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { InsightsRoutingModule } from './insights-routing.module';

// Container
import { InsightsComponent } from './insights.component';


@NgModule({
  declarations: [
    InsightsComponent
  ],
  imports: [
    CommonModule,
    InsightsRoutingModule
  ]
})
export class InsightsModule { }
