import { Star, Play } from 'lucide-react';
import { Movie } from '../types/movie';
import { getMovieTitle, getMoviePoster, getMovieRating, getMovieYear } from '../utils/movieHelpers';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  const title = getMovieTitle(movie);
  const poster = getMoviePoster(movie);
  const rating = getMovieRating(movie);
  const year = getMovieYear(movie);

  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer transition-all duration-300 hover:scale-105"
    >
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-800">
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=500';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-red-600 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-8 h-8 text-white fill-current" />
          </div>
        </div>

        {rating > 0 && (
          <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-semibold">{rating.toFixed(1)}</span>
          </div>
        )}
      </div>

      <div className="mt-3 space-y-1">
        <h3 className="text-white font-semibold line-clamp-1 group-hover:text-red-500 transition-colors">
          {title}
        </h3>
        {year !== 'N/A' && (
          <p className="text-gray-400 text-sm">{year}</p>
        )}
      </div>
    </div>
  );
}
