import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PublicAnalysisRoutingModule } from './public-analysis-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { SharedModule } from 'src/app/modules/shared/shared.module';

// Container
import { PublicAnalysisComponent } from './public-analysis.component';

// Components
import { GroupComponent } from './components/group/group.component';
import { NetworkComponent } from './components/social-network/social-network.component';
import { GenderComponent } from './components/gender/gender.component';
import { AgeComponent } from './components/age/age.component';
import { GroupPieComponent } from './components/group/group-pie/group-pie.component';


@NgModule({
  declarations: [
    PublicAnalysisComponent,
    GroupComponent,
    NetworkComponent,
    GenderComponent,
    AgeComponent,
    GroupPieComponent
  ],
  imports: [
    CommonModule,
    PublicAnalysisRoutingModule,
    HighchartsChartModule,
    SharedModule
  ]
})
export class PublicAnalysisModule { }
