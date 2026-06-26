import { useState, useEffect } from 'react';

/**
 * Custom hook to manage favorites state with localStorage persistence.
 */
export default function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('travel_favorites')) || [];
    setFavorites(storedFavs);
  }, []);

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    let newFavs = [...favorites];
    if (newFavs.includes(id)) {
      newFavs = newFavs.filter(favId => favId !== id);
    } else {
      newFavs.push(id);
    }
    setFavorites(newFavs);
    localStorage.setItem('travel_favorites', JSON.stringify(newFavs));
  };

  return { favorites, toggleFavorite };
}
