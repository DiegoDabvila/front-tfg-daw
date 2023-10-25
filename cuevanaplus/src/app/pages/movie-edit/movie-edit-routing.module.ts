import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieEditComponent} from "./movie-edit.component";

const routes: Routes = [{
  path:'',
  component: MovieEditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieEditRoutingModule { }
