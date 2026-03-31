import { Play, Info } from 'lucide-react';
import { Movie } from '../types/movie';
import { getMovieTitle, getMovieDescription, getMovieBackdrop } from '../utils/movieHelpers';

interface HeroProps {
  movie: Movie | null;
  onPlayClick: () => void;
  onInfoClick: () => void;
}

export default function Hero({ movie, onPlayClick, onInfoClick }: HeroProps) {
  if (!movie) {
    return (
      <div className="relative h-[80vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to HATV</h1>
          <p className="text-xl text-gray-300">Your premium streaming destination</p>
        </div>
      </div>
    );
  }

  const title = getMovieTitle(movie);
  const description = getMovieDescription(movie);
  const backdrop = getMovieBackdrop(movie);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backdrop}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 line-clamp-3">
            {description}
          </p>
          <div className="flex space-x-4">
            <button
              onClick={onPlayClick}
              className="flex items-center space-x-2 bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-all transform hover:scale-105"
            >
              <Play className="w-6 h-6 fill-current" />
              <span>Play</span>
            </button>
            <button
              onClick={onInfoClick}
              className="flex items-center space-x-2 bg-gray-500/70 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-500/90 transition-all backdrop-blur-sm"
            >
              <Info className="w-6 h-6" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
