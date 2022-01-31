import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Container
import { QualitativeComponent } from './qualitative.component';

const routes: Routes = [
  { path: '', component: QualitativeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualitativeRoutingModule { }
