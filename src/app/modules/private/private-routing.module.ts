import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Container
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '', component: PrivateComponent, children: [
      { path: 'qualitativo', loadChildren: () => import('./qualitative/qualitative.module').then(m => m.QualitativeModule) },
      { path: '**', redirectTo: 'qualitativo', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
