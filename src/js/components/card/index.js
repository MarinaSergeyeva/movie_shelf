import userData from '../../userData';

export default class MovieCard {
  constructor(item) {
    this.refs = this.getRefs(item.id);
    this.item = item;
    this.movieGenres = this.getMovieGenres();
  }

  getRefs(id) {
    const refs = {};

    return refs;
  }

  getMovieGenres() {
    let movieGenres = [];

    for (let id of this.item.genre_ids) {
      userData.genres.map(genre => {
        if (genre.id === id) {
          movieGenres.push(genre.name);
        }
        return;
      });
    }

    return movieGenres;
  }

  createCardMarkup() {
    const movie = this.item;

    const releaseYear =
      (movie.release_date && movie.release_date.slice(0, 4)) ||
      (movie.first_air_date && movie.first_air_date.slice(0, 4));

    const markup = `<li class="galleryItem">
    <img class="galleryItemImage" src='https://image.tmdb.org/t/p/w500${
      movie.poster_path
    }' alt='movie_poster'>
    <p class="galleryItemTitle">${movie.title || movie.original_name}</p>
    <p class="galleryItemInfo"> ${this.movieGenres} | ${releaseYear}</p>
    </li>`;

    return markup;
  }
}
