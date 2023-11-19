import {Injectable, Injector} from '@angular/core';
import {AbstractRepository} from "../../../services/abstract.repository";
import {map} from "rxjs";
import {AllFilmsRequestModel, FilmForUserModel} from "../../../models/movie.model";
import {AllFilmsRequestInterface, FilmForUserInterface} from "../../../Interfaces/movie.interface";


@Injectable({
  providedIn: 'root'
})
export class HomeRepositoryService extends AbstractRepository{


  constructor(injector: Injector) {
    super(injector)
  }

  getAllFilms() {
    return this.doRequest<AllFilmsRequestInterface[]>('GET', `films/admin`)
      .pipe(
        map(films => films.map(film => new AllFilmsRequestModel(film)))
      );
  }

  getUserFilm() {
    return this.doRequest<FilmForUserInterface[]>(
      `GET`,
      'films'
    ).pipe(
      map(films =>  films.map(film => new FilmForUserModel(film)))
    )
  }

}
