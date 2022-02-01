import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PublicProfileRoutingModule } from './public-profile-routing.module';

// Container
import { PublicProfileComponent } from './public-profile.component';


@NgModule({
  declarations: [
    PublicProfileComponent
  ],
  imports: [
    CommonModule,
    PublicProfileRoutingModule
  ]
})
export class PublicProfileModule { }
