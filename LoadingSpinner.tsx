import { Film } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <Film className="w-16 h-16 text-red-600 mx-auto mb-4 animate-pulse" />
        <p className="text-white text-xl">Loading HATV...</p>
      </div>
    </div>
  );
}
