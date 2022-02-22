import './sass/main.scss';

import './js/api/movies';
import './js/gallery';

import { getTrendingMovies } from './js/api/movies';
import { gallery } from './js/gallery';
import userData from './js/userData';

const initialAction = async () => {
  await getTrendingMovies();
  gallery(userData.trendingMovies);
};

initialAction();
