import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { ControlErrorsComponent } from './control-errors/control-errors.component';

@NgModule({
  declarations: [
    ControlErrorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ControlErrorsComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormsPackModule { }
