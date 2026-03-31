import { Search, Film } from 'lucide-react';

interface NavbarProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export default function Navbar({ onSearch, searchQuery }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-black/90 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Film className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-bold text-white tracking-wider">HATV</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button className="text-white hover:text-gray-300 transition-colors">Home</button>
              <button className="text-white hover:text-gray-300 transition-colors">Movies</button>
              <button className="text-white hover:text-gray-300 transition-colors">TV Shows</button>
              <button className="text-white hover:text-gray-300 transition-colors">My List</button>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search movies..."
                className="w-64 px-4 py-2 pl-10 bg-black/60 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
