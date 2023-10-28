export const retedMovieResponseMock = () => ({
    id: 1,
      userId: 101,
    movieId: 201,
    rentalDate: new Date('2023-01-15'),
    movie: {
    id: 201,
      title: "Pelicula de Ejemplo",
      releaseDate: new Date('2022-12-01'),
      imageUrl: "https://i.3djuegos.com/juegos/17687/mortal_kombat_la_pel__cula__2021_/fotos/ficha/mortal_kombat_la_pel__cula__2021_-5367156.webp",
      director: {
      name: "Director de Prueba",
        surnames: "Apellidos del Director",
        bio: "Biografía del director de prueba",
        age: 45
    }
  }
})
