import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieEditRoutingModule } from './movie-edit-routing.module';
import { MovieEditComponent } from './movie-edit.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    MovieEditComponent
  ],
  imports: [
    CommonModule,
    MovieEditRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class MovieEditModule { }
