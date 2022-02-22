import { createMovieCart } from '../components/cart';

export const gallery = movies => {
  const galleryWrapper = document.querySelector('.pageContentWrapper');
  const markup = movies.reduce((acc, movie) => {
    acc += createMovieCart(movie);
    return acc;
  }, '');
  return (galleryWrapper.innerHTML = markup);
};
