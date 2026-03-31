export interface Movie {
  id: string | number;
  title?: string;
  name?: string;
  description?: string;
  overview?: string;
  poster?: string;
  poster_path?: string;
  image?: string;
  backdrop?: string;
  backdrop_path?: string;
  rating?: number;
  vote_average?: number;
  year?: string | number;
  release_date?: string;
  genre?: string[];
  genres?: string[];
  duration?: string | number;
  runtime?: number;
}
