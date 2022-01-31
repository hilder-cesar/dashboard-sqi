import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsPackModule } from './modules/forms-pack/forms-pack.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsPackModule,
    FontAwesomeModule
  ],
  exports: [
    FormsPackModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
