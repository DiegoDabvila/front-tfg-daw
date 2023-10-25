import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieEditRoutingModule } from './movie-edit-routing.module';
import { MovieEditComponent } from './movie-edit.component';


@NgModule({
  declarations: [
    MovieEditComponent
  ],
  imports: [
    CommonModule,
    MovieEditRoutingModule
  ]
})
export class MovieEditModule { }
