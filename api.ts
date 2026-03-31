import { Movie } from '../types/movie';

const API_BASE_URL = 'https://966e799e-3fd7-4763-a6c8-285b1f6f469c-00-3s4jo2io5rxsm.picard.replit.dev';

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return Array.isArray(data) ? data : data.movies || data.results || [];
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
      const allMovies = await fetchMovies();
      return allMovies.filter(movie => {
        const title = movie.title || movie.name || '';
        return title.toLowerCase().includes(query.toLowerCase());
      });
    }
    const data = await response.json();
    return Array.isArray(data) ? data : data.movies || data.results || [];
  } catch (error) {
    const allMovies = await fetchMovies();
    return allMovies.filter(movie => {
      const title = movie.title || movie.name || '';
      return title.toLowerCase().includes(query.toLowerCase());
    });
  }
};
