import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Containers
import { WordcloudComponent } from './wordcloud.component';

const routes: Routes = [
  { path: '', component: WordcloudComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordcloudRoutingModule { }
