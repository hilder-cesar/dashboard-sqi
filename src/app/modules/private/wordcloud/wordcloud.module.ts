import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { WordcloudRoutingModule } from './wordcloud-routing.module';

// Container
import { WordcloudComponent } from './wordcloud.component';


@NgModule({
  declarations: [
    WordcloudComponent
  ],
  imports: [
    CommonModule,
    WordcloudRoutingModule
  ]
})
export class WordcloudModule { }
