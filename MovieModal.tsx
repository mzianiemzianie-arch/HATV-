import { X, Play, Plus, ThumbsUp, Star } from 'lucide-react';
import { Movie } from '../types/movie';
import {
  getMovieTitle,
  getMovieDescription,
  getMovieBackdrop,
  getMovieRating,
  getMovieYear,
  getMovieGenres,
  getMovieDuration
} from '../utils/movieHelpers';

interface MovieModalProps {
  movie: Movie | null;
  onClose: () => void;
  onPlay: () => void;
}

export default function MovieModal({ movie, onClose, onPlay }: MovieModalProps) {
  if (!movie) return null;

  const title = getMovieTitle(movie);
  const description = getMovieDescription(movie);
  const backdrop = getMovieBackdrop(movie);
  const rating = getMovieRating(movie);
  const year = getMovieYear(movie);
  const genres = getMovieGenres(movie);
  const duration = getMovieDuration(movie);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-900/80 hover:bg-gray-800 rounded-full p-2 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="relative h-[50vh] overflow-hidden">
          <img
            src={backdrop}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

          <div className="absolute bottom-8 left-8 right-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <button
                onClick={onPlay}
                className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-all transform hover:scale-105"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>Play</span>
              </button>
              <button className="bg-gray-700/80 hover:bg-gray-600 backdrop-blur-sm text-white p-3 rounded-full transition-all">
                <Plus className="w-6 h-6" />
              </button>
              <button className="bg-gray-700/80 hover:bg-gray-600 backdrop-blur-sm text-white p-3 rounded-full transition-all">
                <ThumbsUp className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-300">
            {rating > 0 && (
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold text-white">{rating.toFixed(1)}</span>
              </div>
            )}
            {year !== 'N/A' && <span>{year}</span>}
            {duration !== 'N/A' && <span>{duration}</span>}
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {description}
          </p>

          {genres.length > 0 && (
            <div className="mb-4">
              <span className="text-gray-400">Genres: </span>
              <span className="text-white">{genres.join(', ')}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
