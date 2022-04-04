import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsPackModule } from './modules/forms-pack/forms-pack.module';
import { TruncatePipe } from './pipe/truncate/truncate.pipe';


@NgModule({
  declarations: [
    TruncatePipe
  ],
  imports: [
    CommonModule,
    FormsPackModule,
    FontAwesomeModule
  ],
  exports: [
    FormsPackModule,
    FontAwesomeModule,
    TruncatePipe
  ]
})
export class SharedModule { }
