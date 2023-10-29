import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MovieDetailComponent} from "../components/movie-detail/movie-detail.component";

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor(private dialog: MatDialog) {}

  openMovieDetailModal(): void {
    this.dialog.open(MovieDetailComponent, {
      width: '400px',
    });
  }


}
