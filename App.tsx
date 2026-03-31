import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieGrid from './components/MovieGrid';
import MovieModal from './components/MovieModal';
import LoadingSpinner from './components/LoadingSpinner';
import { Movie } from './types/movie';
import { fetchMovies, searchMovies } from './services/api';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [heroMovie, setHeroMovie] = useState<Movie | null>(null);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    setLoading(true);
    const data = await fetchMovies();
    setMovies(data);
    setFilteredMovies(data);
    if (data.length > 0) {
      setHeroMovie(data[0]);
    }
    setLoading(false);
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredMovies(movies);
    } else {
      const results = await searchMovies(query);
      setFilteredMovies(results);
    }
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handlePlay = () => {
    alert('Playback feature would be implemented here');
  };

  const handleHeroInfo = () => {
    if (heroMovie) {
      setSelectedMovie(heroMovie);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar onSearch={handleSearch} searchQuery={searchQuery} />
      {!searchQuery && <Hero movie={heroMovie} onPlayClick={handlePlay} onInfoClick={handleHeroInfo} />}
      <div className="relative z-10 -mt-32">
        {searchQuery ? (
          <MovieGrid
            title={`Search Results for "${searchQuery}"`}
            movies={filteredMovies}
            onMovieClick={handleMovieClick}
          />
        ) : (
          <>
            <MovieGrid
              title="Trending Now"
              movies={filteredMovies.slice(0, 12)}
              onMovieClick={handleMovieClick}
            />
            <MovieGrid
              title="Popular Movies"
              movies={filteredMovies.slice(12, 24)}
              onMovieClick={handleMovieClick}
            />
            <MovieGrid
              title="Top Rated"
              movies={filteredMovies.slice(24, 36)}
              onMovieClick={handleMovieClick}
            />
            <MovieGrid
              title="Recently Added"
              movies={filteredMovies.slice(36)}
              onMovieClick={handleMovieClick}
            />
          </>
        )}
      </div>
      {filteredMovies.length === 0 && searchQuery && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-xl">No movies found for "{searchQuery}"</p>
        </div>
      )}
      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        onPlay={handlePlay}
      />
      <footer className="bg-gray-900 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">HATV</h3>
            <p className="text-gray-400">Your Premium Streaming Experience</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
