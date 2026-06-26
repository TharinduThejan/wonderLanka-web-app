import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from './icons';
import { calculateDistance } from '../utils/helpers';

export default function LocationCard({ loc, isFav, userLocation, onToggleFavorite }) {
  const navigate = useNavigate();
  const distance = userLocation ? calculateDistance(userLocation.lat, userLocation.lng, loc.lat, loc.lng) : null;

  return (
    <div 
      onClick={() => navigate(`/detail/${loc.id}`, { state: { userLocation } })}
      className="relative overflow-hidden rounded-2xl h-[340px] group cursor-pointer border border-white/5 bg-[#1E1E1E] transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#4ADE80]/10"
    >
      <img src={loc.img} alt={loc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent opacity-90"></div>
      
      {/* Distance Badge */}
      {distance !== null && (
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-xs px-2 py-1 rounded-md border border-white/10 font-mono text-[#4ADE80]">
          {distance.toFixed(1)} km
        </div>
      )}
      
      {/* Bookmark */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(e, loc.id);
        }}
        className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border transition-colors z-20 ${
          isFav ? 'text-[#4ADE80] border-[#4ADE80]' : 'text-white border-white/20 hover:bg-white/20'
        }`}
      >
        <Icons.Bookmark filled={isFav} />
      </button>

      {/* Content */}
      <div className="absolute bottom-0 w-full p-5 flex flex-col justify-end">
        <div className="flex justify-between items-end mb-1">
          <h3 className="text-2xl font-bold">{loc.name}</h3>
          {/* <div className="bg-black/50 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1 border border-white/10">
            <Icons.Star />
            <span className="text-xs font-semibold">{loc.rating}</span>
          </div> */}
        </div>
        <p className="text-xs text-gray-400">{loc.tags}</p>
      </div>
    </div>
  );
}
