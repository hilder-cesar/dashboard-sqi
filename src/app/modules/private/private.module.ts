import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PrivateRoutingModule } from './private-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

// Container
import { PrivateComponent } from './private.component';

@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    NgbDatepickerModule
  ]
})
export class PrivateModule { }
