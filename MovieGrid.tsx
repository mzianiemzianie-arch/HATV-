import { Movie } from '../types/movie';
import MovieCard from './MovieCard';

interface MovieGridProps {
  title: string;
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

export default function MovieGrid({ title, movies, onMovieClick }: MovieGridProps) {
  if (movies.length === 0) return null;

  return (
    <div className="py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 px-4 sm:px-6 lg:px-8">
        {title}
      </h2>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => onMovieClick(movie)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
