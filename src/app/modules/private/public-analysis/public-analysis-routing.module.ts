import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Container
import { PublicAnalysisComponent } from './public-analysis.component';

const routes: Routes = [
  { path: '', component: PublicAnalysisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicAnalysisRoutingModule { }
