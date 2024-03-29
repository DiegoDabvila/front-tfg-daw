export interface DirectorInterface {
  id: number;
  age: number;
  bio: string;
  name: string;
  surnames: string
}

export interface UsersInterface {
  asignnationDate: string;
  expirationTime: number;
  movieId: number;
  user: UserOnMovieInterface;
  userId: number
}

export interface UserOnMovieInterface {
  id?: number;
  name: string;
  surnames: string;
  username: string;
}

export interface AllFilmsRequestInterface {
  director: DirectorInterface;
  directorId: number;
  id: number;
  imageUrl: string
  name: string;
  score: number;
  users: UsersInterface[];
  year: number
}

export interface FilmForUserInterface {
  asignnationDate: string;
  expirationTime: number;
  movieId: number;
  movie: FilmInterfaceInterface;
  userId: number
}

export interface FilmInterfaceInterface {
  director: DirectorInterface;
  directorId: number;
  id: number;
  imageUrl: string;
  name: string;
  score: number;
  year: number
}

export interface UpdateFilmInterface {
  name: string,
  year: number,
  score: number,
  imageUrl: string}
