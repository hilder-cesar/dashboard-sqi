import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PropertyDataRoutingModule } from './property-data-routing.module';

// Containers
import { PropertyDataComponent } from './property-data.component';


@NgModule({
  declarations: [
    PropertyDataComponent
  ],
  imports: [
    CommonModule,
    PropertyDataRoutingModule
  ]
})
export class PropertyDataModule { }
