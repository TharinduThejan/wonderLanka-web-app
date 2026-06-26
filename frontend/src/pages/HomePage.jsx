import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LocationCard from '../components/LocationCard';
import Hero from '../components/Hero';
import Icons from '../components/icons';
import locationsData from '../data/locationsData';
import useFavorites from '../hooks/useFavorites';
import useGeolocation from '../hooks/useGeolocation';

export default function HomePage() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { favorites, toggleFavorite } = useFavorites();
  const { userLocation, isLocating, requestGeolocation } = useGeolocation();
  const resultsRef = useRef(null);
  const searchInputRef = useRef(null);
  const [searchParams] = useSearchParams();



  // Pick up ?q= from navbar search
  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      setSearchQuery(q);
      // Scroll to results after a short delay for render
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [searchParams]);

  // Filter by category
  const categoryFiltered = filter === 'All' 
    ? locationsData 
    : locationsData.filter(loc => loc.category === filter);

  // Filter by search query
  const trimmedQuery = searchQuery.trim().toLowerCase();
  const filteredLocations = trimmedQuery
    ? categoryFiltered.filter(loc => {
        const searchableText = `${loc.name} ${loc.category} ${loc.tags} ${loc.subtitle} ${loc.description}`.toLowerCase();
        // Support multi-word search: all words must match
        const words = trimmedQuery.split(/\s+/);
        return words.every(word => searchableText.includes(word));
      })
    : categoryFiltered;

  const isSearching = trimmedQuery.length > 0;

  const handleSearch = (e) => {
    e.preventDefault();
    if (trimmedQuery) {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    searchInputRef.current?.focus();
  };

  return (
    <div className="bg-[#121212] min-h-screen text-white font-sans antialiased selection:bg-[#4ADE80] selection:text-black">
      <Navbar />
      
      <div className="pt-16 pb-20">
        
        {/* HERO SECTION WITH PHOTO SLIDER */}
        <Hero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          clearSearch={clearSearch}
          isSearching={isSearching}
          searchInputRef={searchInputRef}
          onQuickSearch={(tag) => {
            setSearchQuery(tag);
            setTimeout(() => {
              resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 150);
          }}
        />

        {/* MAIN CONTENT AREA */}
        <div ref={resultsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20">
          
          {/* HEADER & FILTERS */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {isSearching ? (
                  <>
                    Results for "<span className="text-[#4ADE80]">{searchQuery.trim()}</span>"
                  </>
                ) : (
                  'Local Attractions'
                )}
              </h2>
              <p className="text-gray-400">
                {isSearching 
                  ? `${filteredLocations.length} ${filteredLocations.length === 1 ? 'destination' : 'destinations'} found`
                  : 'Discover iconic landmarks and hidden gems.'
                }
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              {/* Geolocation Button */}
              <button 
                onClick={requestGeolocation} 
                className={`text-sm flex items-center gap-2 px-4 py-2 rounded-full transition ${userLocation ? 'bg-[#4ADE80]/20 text-[#4ADE80]' : 'bg-[#1E1E1E] border border-white/10 text-gray-300 hover:bg-white/10'}`}
              >
                <Icons.MapPin />
                {isLocating ? 'Locating...' : userLocation ? 'Distance Active' : 'Show Distance'}
              </button>

              <div className="flex gap-2">
                {['All', 'Culture', 'Nature', 'Adventure'].map(category => (
                  <button 
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                      filter === category 
                        ? 'bg-white/10 border-white/20 text-white' 
                        : 'bg-transparent border-white/10 text-gray-400 hover:bg-white/5'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* GRID */}
          {filteredLocations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredLocations.map(loc => (
                <LocationCard 
                  key={loc.id} 
                  loc={loc} 
                  isFav={favorites.includes(loc.id)} 
                  userLocation={userLocation} 
                  onToggleFavorite={toggleFavorite}
                  searchQuery={trimmedQuery}
                />
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No destinations found</h3>
              <p className="text-gray-500 max-w-md mb-6">
                We couldn't find any matches for "<span className="text-gray-300">{searchQuery.trim()}</span>". Try adjusting your search or explore different categories.
              </p>
              <button 
                onClick={() => { clearSearch(); setFilter('All'); }}
                className="px-6 py-2.5 rounded-full bg-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/20 hover:bg-[#4ADE80]/20 transition-colors text-sm font-medium"
              >
                Clear search & show all
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}