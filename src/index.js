import './sass/main.scss';

import './js/api/movies';
import './js/gallery';

import { getTrendingMovies } from './js/api/movies';
import Gallery from './js/gallery';
import userData from './js/userData';

const initialAction = async () => {
  await getTrendingMovies();
  new Gallery(userData.trendingMovies).createGalleryMarkup();
};

initialAction();
