import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icons from '../components/Icons';
import locationsData from '../data/locationsData';
import useFavorites from '../hooks/useFavorites';
import useGeolocation from '../hooks/useGeolocation';
import useWeather from '../hooks/useWeather';
import { calculateDistance, generateGoogleMapsUrl } from '../utils/helpers';

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();
  const { userLocation, requestGeolocation } = useGeolocation();
  
  const [showRoute, setShowRoute] = useState(false);
  const [pendingDirections, setPendingDirections] = useState(false);

  const selectedLocation = locationsData.find(loc => loc.id === id);

  // Fetch live weather data asynchronously
  const { weatherData, isLoading, error } = useWeather(selectedLocation?.lat, selectedLocation?.lng);

  // Open Google Maps directions once location is obtained
  useEffect(() => {
    if (pendingDirections && userLocation && selectedLocation) {
      const url = generateGoogleMapsUrl(selectedLocation, userLocation);
      window.open(url, '_blank');
      setPendingDirections(false);
      setShowRoute(true);
    }
  }, [pendingDirections, userLocation, selectedLocation]);

  const handleGetDirections = () => {
    if (userLocation) {
      window.open(generateGoogleMapsUrl(selectedLocation, userLocation), '_blank');
      setShowRoute(true);
    } else {
      requestGeolocation();
      setPendingDirections(true);
    }
  };

  if (!selectedLocation) {
    return (
      <div className="bg-[#121212] min-h-screen text-white font-sans flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Location Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-[#4ADE80]/20 text-[#4ADE80] hover:bg-[#4ADE80] hover:text-black transition-colors px-6 py-2.5 rounded-full font-medium"
          >
            Back to Discover
          </button>
        </div>
      </div>
    );
  }

  const isFav = favorites.includes(selectedLocation.id);
  
  // Combine main image and gallery for the grid
  const galleryImages = [
    selectedLocation.img, 
    ...(selectedLocation.gallery)
  ];

  return (
    <div className="bg-[#121212] min-h-screen text-white font-sans antialiased selection:bg-[#4ADE80] selection:text-black overflow-x-hidden">
      <Navbar />

      {/* 1. FULL WIDTH HERO HEADER */}
      <div className="relative w-full h-[60vh] min-h-[400px] mt-16">
        <img 
          src={selectedLocation.img} 
          alt={selectedLocation.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent"></div>
        
        <button 
          onClick={() => navigate('/')}
          className="absolute top-8 left-4 sm:left-8 bg-black/40 hover:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-white flex items-center gap-2 transition-all border border-white/10"
        >
          <Icons.ArrowLeft /> Back
        </button>

        <div className="absolute bottom-0 left-0 w-full px-4 sm:px-8 lg:px-16 pb-12 max-w-7xl mx-auto flex justify-between items-end">
          <div>
            <div className="flex gap-2 mb-4">
              <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#4ADE80]/30">
                {selectedLocation.tags}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-2 text-white drop-shadow-lg">{selectedLocation.name}</h1>
            <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl">{selectedLocation.subtitle}</p>
          </div>

          <button 
            onClick={(e) => toggleFavorite(e, selectedLocation.id)}
            className={`hidden md:flex w-14 h-14 bg-black/40 backdrop-blur-md rounded-full items-center justify-center border transition-all hover:scale-110 ${
              isFav ? 'text-[#4ADE80] border-[#4ADE80]' : 'text-white border-white/20 hover:bg-white/20'
            }`}
          >
            <Icons.Bookmark filled={isFav} />
          </button>
        </div>
      </div>

      {/* 2. MAIN CENTERED CONTENT (Description, Info, Grid) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 flex flex-col gap-12">
        
        {/* Description */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-[#4ADE80] mb-4">A Monument to Power and Beauty</h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
            {selectedLocation.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Live Weather Section */}
          <div className="bg-gradient-to-r from-[#1E1E1E] to-[#152018] border border-[#4ADE80]/20 p-6 rounded-3xl flex flex-col items-start justify-between gap-6 relative overflow-hidden group">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 blur-xl group-hover:opacity-10 transition duration-700">
               <svg className="w-64 h-64 text-[#4ADE80]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.758a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" /></svg>
            </div>
            
            <div className="relative z-10 w-full">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ADE80]"></span>
                </span>
                <h3 className="text-[#4ADE80] text-sm font-bold tracking-widest uppercase">Live Local Weather</h3>
              </div>
              <p className="text-gray-300 font-medium text-sm">Real-time conditions</p>
            </div>
            
            <div className="relative z-10 flex items-center bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/5 w-full shadow-inner">
               {isLoading ? (
                 <div className="animate-pulse flex items-center gap-4">
                    <div className="h-10 w-10 bg-white/10 rounded-full"></div>
                    <div className="flex flex-col gap-2">
                       <div className="h-5 w-16 bg-white/10 rounded"></div>
                       <div className="h-3 w-12 bg-white/10 rounded"></div>
                    </div>
                 </div>
               ) : error ? (
                 <span className="text-red-400 text-sm font-medium">{error}</span>
               ) : weatherData ? (
                 <div className="flex items-center gap-5">
                    <div className="text-5xl drop-shadow-lg">{weatherData.isDay ? '☀️' : '🌙'}</div>
                    <div className="flex flex-col">
                      <div className="text-3xl font-black text-white tracking-tight">{weatherData.temperature}°C</div>
                      <div className="text-[#4ADE80] text-sm font-bold uppercase tracking-wider">{weatherData.condition}</div>
                    </div>
                 </div>
               ) : null}
            </div>
          </div>

      
          <div className="bg-gradient-to-r from-[#152018] to-[#1E1E1E] border border-[#4ADE80]/20 p-6 rounded-3xl flex flex-col items-start justify-between gap-6 relative overflow-hidden group">
            <div className="absolute right-[-20%] bottom-[-20%] opacity-5 group-hover:opacity-10 transition duration-700">
               <Icons.MapPin className="w-64 h-64 text-[#4ADE80]" />
            </div>

            <div className="relative z-10 w-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#4ADE80]/20 flex items-center justify-center text-[#4ADE80]">
                  <Icons.Navigation />
                </div>
                <h3 className="text-[#4ADE80] text-sm font-bold tracking-widest uppercase">Distance to Destination</h3>
              </div>
              <p className="text-gray-300 font-medium text-sm">Calculated from your coordinates</p>
            </div>
            
            <div className="relative z-10 flex items-center w-full">
              {userLocation && selectedLocation ? (
                <div className="bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/5 w-full shadow-inner flex flex-col justify-center">
                  <span className="text-4xl font-black text-white tracking-tighter">
                    {calculateDistance(userLocation.lat, userLocation.lng, selectedLocation.lat, selectedLocation.lng).toFixed(1)}
                    <span className="text-xl text-gray-400 ml-2 font-medium">km away</span>
                  </span>
                </div>
              ) : (
                <div className="bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/5 w-full shadow-inner flex flex-col items-start gap-3">
                  <p className="text-sm text-gray-400">Share your location to see how far you are from this spot.</p>
                  <button
                    onClick={requestGeolocation}
                    className="bg-[#4ADE80] text-black hover:bg-[#3bca70] transition-colors px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg w-full sm:w-auto"
                  >
                    Calculate Distance
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Photo Gallery Grid Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <h3 className="text-2xl font-bold text-white">Visual Gallery</h3>
            
            <a 
              href={`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(selectedLocation.name + ' Sri Lanka')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-bold bg-[#4ADE80]/10 text-[#4ADE80] hover:bg-[#4ADE80]/20 border border-[#4ADE80]/20 px-5 py-2.5 rounded-full transition-colors group w-full sm:w-auto"
            >
              Show more images
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, idx) => (
              <div 
                key={idx} 
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group border border-white/10 shadow-lg bg-[#1A1C1E]"
              >
                <img 
                  src={src} 
                  alt={`Gallery photo ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 3. FULL WIDTH EDGE-TO-EDGE MAP SECTION */}
      <div className="w-full bg-[#151515] border-t border-white/5 mt-8 pt-16">
        
        {/* Map Header & Controls */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4ADE80] to-[#22D3EE] flex items-center justify-center text-black shadow-lg">
              <Icons.MapPin />
            </div>
            <div>
              <h2 className="font-extrabold text-white text-2xl md:text-3xl">Location & Routing</h2>
              {showRoute && userLocation ? (
                <p className="text-sm md:text-base text-[#4ADE80] font-mono mt-1">
                  {calculateDistance(userLocation.lat, userLocation.lng, selectedLocation.lat, selectedLocation.lng).toFixed(1)} km away from your location
                </p>
              ) : (
                <p className="text-sm md:text-base text-gray-400 mt-1">Sri Lanka</p>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
              onClick={handleGetDirections}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all bg-[#4ADE80] text-black hover:bg-[#3bca70] hover:scale-105 active:scale-95"
            >
              <Icons.Navigation />
              <span>{showRoute ? 'Update Route' : 'Get Directions'}</span>
            </button>
            <a 
              href={generateGoogleMapsUrl(selectedLocation, userLocation)}
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-base border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              Open App <Icons.ExternalLink />
            </a>
          </div>
        </div>

        {/* 100% Width Iframe Block */}
        <div className="w-full h-[400px] md:h-[600px] bg-black relative border-y border-white/10">
          {showRoute && userLocation ? (
            <iframe
              title="Route"
              width="100%" height="100%" frameBorder="0" style={{ border: 0 }}
              src={`https://maps.google.com/maps?saddr=${userLocation.lat},${userLocation.lng}&daddr=${selectedLocation.lat},${selectedLocation.lng}&t=&z=12&ie=UTF-8&iwloc=&output=embed`}
              allowFullScreen
            ></iframe>
          ) : (
            <iframe
              title="Location"
              width="100%" height="100%" frameBorder="0" style={{ border: 0 }}
              src={`https://maps.google.com/maps?q=${selectedLocation.lat},${selectedLocation.lng}&t=&z=12&ie=UTF-8&iwloc=&output=embed`}
              allowFullScreen
            ></iframe>
          )}
        </div>

      </div>
      <Footer />
    </div>
  );
}