export default class MovieCard {
  constructor(item) {
    this.refs = this.getRefs(item.id);
    this.item = item;
  }

  getRefs(id) {
    const refs = {};

    return refs;
  }

  createCardMarkup() {
    const movie = this.item;
    const markup = `<li class="galleryItem">
    <img class="galleryItemImage" src='https://image.tmdb.org/t/p/w500${movie.poster_path}' alt='movie_poster'>
    <p class="galleryItemTitle">${movie.title}</p>
    <p class="galleryItemInfo"> Genre | ${movie.release_date}</p>
    </li>`;

    return markup;
  }
}
