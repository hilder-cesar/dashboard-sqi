import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { InsightsRoutingModule } from './insights-routing.module';

// Container
import { InsightsComponent } from './insights.component';
import { FollowersGrowthComponent } from './followers-growth/followers-growth.component';
import { InteractionsComponent } from './interactions/interactions.component';


@NgModule({
  declarations: [
    InsightsComponent,
    FollowersGrowthComponent,
    InteractionsComponent
  ],
  imports: [
    CommonModule,
    InsightsRoutingModule
  ]
})
export class InsightsModule { }
