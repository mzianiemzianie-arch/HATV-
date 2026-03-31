import { Movie } from '../types/movie';

export const getMovieTitle = (movie: Movie): string => {
  return movie.title || movie.name || 'Untitled';
};

export const getMovieDescription = (movie: Movie): string => {
  return movie.description || movie.overview || 'No description available';
};

export const getMoviePoster = (movie: Movie): string => {
  const poster = movie.poster || movie.poster_path || movie.image;
  if (!poster) return 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800';
  if (poster.startsWith('http')) return poster;
  return `https://image.tmdb.org/t/p/w500${poster}`;
};

export const getMovieBackdrop = (movie: Movie): string => {
  const backdrop = movie.backdrop || movie.backdrop_path;
  if (!backdrop) return getMoviePoster(movie);
  if (backdrop.startsWith('http')) return backdrop;
  return `https://image.tmdb.org/t/p/original${backdrop}`;
};

export const getMovieRating = (movie: Movie): number => {
  return movie.rating || movie.vote_average || 0;
};

export const getMovieYear = (movie: Movie): string => {
  if (movie.year) return String(movie.year);
  if (movie.release_date) return new Date(movie.release_date).getFullYear().toString();
  return 'N/A';
};

export const getMovieGenres = (movie: Movie): string[] => {
  return movie.genre || movie.genres || [];
};

export const getMovieDuration = (movie: Movie): string => {
  const duration = movie.duration || movie.runtime;
  if (!duration) return 'N/A';
  if (typeof duration === 'string') return duration;
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};
