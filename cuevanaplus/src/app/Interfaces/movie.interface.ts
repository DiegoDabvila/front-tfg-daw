
export interface UserInterface {
  id: number;
  username: string;
  name: string;
  surnames: string;
  isAdmin: boolean;
}

export interface DirectorInterface {
  name: string;
  surnames: string;
  bio: string;
  age: number;
}


export interface NewFilmResquest {
  name: string;
  year: number;
  score: number;
  imageUrl: string;
  directorId?: number;
  director?: DirectorInterface;
}


export interface RentedMovieResponse {
  id: number;
  userId: number;
  movieId: number;
  rentalDate: Date;
  movie: {
    id: number;
    title: string;
    releaseDate: Date;
    imageUrl: string;
    director: DirectorInterface;
  };
}
