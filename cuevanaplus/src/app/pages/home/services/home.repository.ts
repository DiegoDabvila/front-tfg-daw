import {Injectable, Injector} from '@angular/core';
import {AbstractRepository} from "../../../services/abstract.repository";
import {debounceTime, map} from "rxjs";
import {AllFilmsRequestModel, FilmForUserModel} from "../../../models/filmModel.model";
import {AllFilmsRequestInterface, FilmForUserInterface} from "../../../Interfaces/filmInterface.interface";

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
