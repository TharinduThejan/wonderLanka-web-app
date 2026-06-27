import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LocationCard from '../components/LocationCard';
import Icons from '../components/Icons';
import locationsData from '../data/locationsData';
import useFavorites from '../hooks/useFavorites';

export default function FavoritesPage() {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();

  const savedLocations = locationsData.filter(loc => favorites.includes(loc.id));

  return (
    <div className="bg-[#121212] min-h-screen text-white font-sans antialiased selection:bg-[#4ADE80] selection:text-black">
      <Navbar />
      
      <div className="pt-24 pb-20 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2">Saved Places</h2>
          <p className="text-gray-400">Your personal collection of dream destinations.</p>
        </div>

        {savedLocations.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-[#1E1E1E] rounded-2xl border border-white/5 text-center px-4">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-gray-500 mb-4">
              <Icons.Bookmark filled={false} />
            </div>
            <h3 className="text-xl font-medium mb-2">No places saved yet</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Start building your itinerary by clicking the bookmark icon on places you want to visit.
            </p>
            <button 
              onClick={() => navigate('/')}
              className="bg-[#4ADE80]/20 text-[#4ADE80] hover:bg-[#4ADE80] hover:text-black transition-colors px-6 py-2.5 rounded-full font-medium"
            >
              Explore Destinations
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {savedLocations.map(loc => (
              <LocationCard 
                key={loc.id} 
                loc={loc} 
                isFav={true} 
                userLocation={null} 
                onToggleFavorite={toggleFavorite} 
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
