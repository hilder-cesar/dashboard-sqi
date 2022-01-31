import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Contaienr
import { PrivateComponent } from './private.component';

const routes: Routes = [
  { path: '', component: PrivateComponent, children: [

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
