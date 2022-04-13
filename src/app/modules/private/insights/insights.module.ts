import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { InsightsRoutingModule } from './insights-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';

// Container
import { InsightsComponent } from './insights.component';

@NgModule({
  declarations: [
    InsightsComponent
  ],
  imports: [
    CommonModule,
    InsightsRoutingModule,
    SharedModule
  ]
})
export class InsightsModule { }
