import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MentionsRoutingModule } from './mentions-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';

// Container
import { MentionsComponent } from './mentions.component';

@NgModule({
  declarations: [
    MentionsComponent
  ],
  imports: [
    CommonModule,
    MentionsRoutingModule,
    SharedModule
  ]
})
export class MentionsModule { }
