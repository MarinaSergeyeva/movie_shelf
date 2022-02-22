import axios from 'axios';
import userData from '../../userData';

const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = 'd90b62d88143f6b8eebbf19cbee39fa4';

export const getTrendingMovies = async () => {
  try {
    const result = await axios.get(`${API_BASE}/trending/all/day?api_key=${API_KEY}`);
    userData.trendingMovies = [...result.data.results];
    return userData.trendingMovies;
  } catch (error) {
    console.log('getTrendingMoviesError', error);
  }
};

export const searchMovie = async query => {
  try {
    const result = await axios.get(`${API_BASE}/search/movie?api_key=${API_KEY}&query=${query}`);
    return result;
  } catch (error) {
    console.log('searchMovieError', error);
  }
};

export const getMovieDetails = async movieId => {
  try {
    const result = await axios.get(`${API_BASE}/movie/${movieId}?api_key=${API_KEY}`);
    return result;
  } catch (error) {
    console.log('getMovieDetailsError', error);
  }
};
