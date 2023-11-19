import {
  AllFilmsRequestInterface,
  DirectorInterface, FilmForUserInterface, MovieInterface,
  UserOnMovieInterface, UsersInterface
} from "../Interfaces/movie.interface";

export class AllFilmsRequestModel{
  director: DirectorInterface;
  directorId: number;
  id: number;
  imageUrl: string
  name: string;
  score: number;
  users: UsersInterface[];
  year: number

  constructor(data: AllFilmsRequestInterface) {
    this.director = data.director;
    this.directorId = data.directorId;
    this.id = data.id;
    this.imageUrl = data.imageUrl;
    this.name = data.name;
    this.score = data.score;
    this.users = data.users;
    this.year = data.year
  }
}


export class FilmForUserModel {
  asignnationDate: string;
  expirationTime: number;
  movieId: number;
  movie: MovieInterface;
  userId: number

  constructor(data: FilmForUserInterface) {
    this.asignnationDate= data.asignnationDate;
    this.expirationTime= data.expirationTime;
    this.movieId= data.movieId;
    this.movie= data.movie;
    this.userId= data.userId;
  }

}
