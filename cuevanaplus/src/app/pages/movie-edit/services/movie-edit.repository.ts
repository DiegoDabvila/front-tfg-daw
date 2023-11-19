import {Injectable, Injector} from '@angular/core';
import {AbstractRepository} from "../../../services/abstract.repository";
import {map} from "rxjs";
import {AllFilmsRequestModel, FilmModel} from "../../../models/filmModel";
import {FilmInterface, UpdateFilmInterface} from "../../../Interfaces/filmInterface";

@Injectable({
  providedIn: 'root'
})
export class MovieEditRepository extends AbstractRepository{

  constructor(injector: Injector) {
    super(injector)
  }

  getFilmById(id: number){
    return this.doRequest<FilmInterface>(
      'GET',
      `films/admin/${id}`
    ).pipe(
      map((film) => new FilmModel(film))
    )
  }

  updateFilm(id: number, body: UpdateFilmInterface){
    return this.doRequest<UpdateFilmInterface>(
      'PUT',
      `films/admin/${id}`,
      undefined,
      body
    ).pipe()
  }

}
