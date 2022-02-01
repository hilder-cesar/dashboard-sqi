import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Container
import { PropertyDataComponent } from './property-data.component';

const routes: Routes = [
  { path: '', component: PropertyDataComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyDataRoutingModule { }
