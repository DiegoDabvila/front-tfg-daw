import { Component, OnInit } from '@angular/core';
import {retedMovieResponseMock} from "../../mocks/rented-movie-response.mock";
import {AppManagerService} from "../../services/app-manager.service";
import {MovieEditService} from "./services/movie-edit.service";
import {ActivatedRoute} from "@angular/router";
import {FilmInterface, UpdateFilmInterface} from "../../Interfaces/filmInterface";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  film: FilmInterface = retedMovieResponseMock();
  filmId: number = 0

  constructor(
    private appManager: AppManagerService,
    private movieEditService: MovieEditService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
    ) {
    this.appManager.updateShowHeader(true)
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.filmId = params['movieId']
      this.#getFilmById(this.filmId)
    })
  }

  #getFilmById(filmId: number){
    this.movieEditService.getFilmById(filmId).subscribe((film) => {
      this.film = film;
    })
  }

  editFilm(){
    const filmUpdateBody: UpdateFilmInterface = {
      name: this.film.name,
      year: this.film.year,
      score: this.film.score,
      imageUrl: this.film.imageUrl
    }
    this.movieEditService.updateFilm(this.filmId, filmUpdateBody).subscribe(()=>{
      this.snackBar.open("Ha sido actualizado con exito", "Cerrar", {duration: 3000})
    })
  }

}
