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
  const heroImages = [
    '/images/Ella.png',
    '/images/p1.jpg',
    '/images/p2.jpg',
    '/images/p3.jpg',

  ];
  
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative h-[90vh] md:h-[120vh] min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/40 via-[#121212]/70 to-[#121212]"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto mt-8 md:mt-10 w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
          Discover the Wonders of Sri Lanka.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 pb-5 mb-8 md:mb-10 max-w-2xl mx-auto font-light">
          Discover the soul of Sri Lanka. From misty highland peaks to pristine, sun-drenched shores, your curated journey begins here.
        </p>
        
        {/* FUNCTIONAL SEARCH BAR */}
        <form 
          onSubmit={handleSearch} 
          className="bg-[#1E1E1E]/85 backdrop-blur-md p-3 md:p-2 rounded-3xl md:rounded-full border border-white/10 flex flex-col md:flex-row items-center w-full max-w-3xl mx-auto shadow-2xl transition-all duration-300 focus-within:border-[#4ADE80]/40 focus-within:shadow-[0_0_30px_rgba(74,222,128,0.08)] gap-3 md:gap-0"
        >
          <div className="flex items-center flex-1 px-4 py-3 md:py-2 w-full border-b md:border-b-0 md:border-r border-white/10">
            <div className="text-gray-400 mr-3"><Icons.MapPin /></div>
            <input 
              ref={searchInputRef}
              id="hero-search-input"
              type="text" 
              placeholder="Where do you want to go?" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none focus:outline-none text-white w-full placeholder-gray-400 text-sm md:text-base" 
            />
            {/* Clear button */}
            {isSearching && (
              <button 
                type="button" 
                onClick={clearSearch}
                className="text-gray-400 hover:text-white transition-colors ml-2 flex-shrink-0 p-1"
                aria-label="Clear search"
              >
                <svg className="w-5 h-5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        
          <button 
            type="submit"
            className="bg-[#4ADE80]/20 text-[#4ADE80] hover:bg-[#4ADE80] hover:text-black transition-colors px-8 py-3.5 md:py-3 rounded-2xl md:rounded-full font-medium w-full md:w-auto flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <Icons.Search /> Search
          </button>
        </form>

        {/* Quick search suggestions */}
        {!isSearching && (
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 md:mt-5">
            <span className="text-xs text-gray-400 w-full sm:w-auto mb-1 sm:mb-0">Popular:</span>
            {['Yala', 'Temple', 'Galle Fort', 'Rainforest', 'Adams Peak'].map(tag => (
              <button 
                key={tag}
                onClick={() => onQuickSearch(tag)}
                className="text-xs md:text-sm px-4 py-2 md:px-3 md:py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#4ADE80] hover:border-[#4ADE80]/30 hover:bg-[#4ADE80]/5 transition-all cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:right-8 md:bottom-8 z-20 flex gap-2">
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