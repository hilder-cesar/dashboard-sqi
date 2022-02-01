import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MentionsRoutingModule } from './mentions-routing.module';

// Container
import { MentionsComponent } from './mentions.component';

@NgModule({
  declarations: [
    MentionsComponent
  ],
  imports: [
    CommonModule,
    MentionsRoutingModule
  ]
})
export class MentionsModule { }
