import { useState, useEffect } from 'react';
import Icons from './Icons';

export default function Hero({ 
  searchQuery, 
  setSearchQuery, 
  handleSearch, 
  clearSearch, 
  isSearching, 
  searchInputRef, 
  onQuickSearch 
}) {
  // Hero Slider Images Array
  const heroImages = [
    '../../../public/images/Sigiriya Hero4.jpg',
    '../../../public/images/Galle.png',
    '../../../public/images/Ella.png',
    '../../../public/images/Mirissa.png',

  ];
  
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Auto-advance hero slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative h-[120vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, idx) => (
          <img 
            key={src}
            src={src} 
            alt={`Hero Background ${idx + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              idx === currentHeroIndex ? 'opacity-100' : 'opacity-0'
            }`} 
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/30 via-[#121212]/60 to-[#121212]"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Discover the Wonders of Sri Lanka.</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
          Discover the soul of Sri Lanka. From misty highland peaks to pristine, sun-drenched shores, your curated journey begins here.
        </p>
        
        {/* FUNCTIONAL SEARCH BAR */}
        <form onSubmit={handleSearch} className="bg-[#1E1E1E]/80 backdrop-blur-md p-2 rounded-full border border-white/10 flex flex-col md:flex-row items-center max-w-3xl mx-auto shadow-2xl transition-all duration-300 focus-within:border-[#4ADE80]/40 focus-within:shadow-[0_0_30px_rgba(74,222,128,0.08)]">
          <div className="flex items-center flex-1 px-4 py-2 w-full border-b md:border-b-0 md:border-r border-white/10">
            <div className="text-gray-400 mr-3"><Icons.MapPin /></div>
            <input 
              ref={searchInputRef}
              id="hero-search-input"
              type="text" 
              placeholder="Where do you want to go?" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none focus:outline-none text-white w-full placeholder-gray-400" 
            />
            {/* Clear button */}
            {isSearching && (
              <button 
                type="button" 
                onClick={clearSearch}
                className="text-gray-400 hover:text-white transition-colors ml-2 flex-shrink-0"
                aria-label="Clear search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        
          <button 
            type="submit"
            className="bg-[#4ADE80]/20 text-[#4ADE80] hover:bg-[#4ADE80] hover:text-black transition-colors px-8 py-3 rounded-full font-medium mt-2 md:mt-0 w-full md:w-auto flex items-center justify-center gap-2"
          >
            <Icons.Search /> Search
          </button>
        </form>

        {/* Quick search suggestions */}
        {!isSearching && (
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            <span className="text-xs text-gray-500">Popular:</span>
            {['Yala', 'Temple', 'Galle Fort', 'Rainforest', 'Adams Peak'].map(tag => (
              <button 
                key={tag}
                onClick={() => onQuickSearch(tag)}
                className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-[#4ADE80] hover:border-[#4ADE80]/30 hover:bg-[#4ADE80]/5 transition-all cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentHeroIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentHeroIndex ? 'w-6 bg-[#4ADE80]' : 'w-2 bg-white/40 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
