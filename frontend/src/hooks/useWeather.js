import { useState, useEffect } from 'react';


export default function useWeather(lat, lng) {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!lat || !lng) return;

    const fetchWeather = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        
        const data = await response.json();
        
        if (data && data.current_weather) {
          let condition = 'Clear';
          const code = data.current_weather.weathercode;
          
          if (code >= 1 && code <= 3) condition = 'Cloudy';
          else if (code >= 45 && code <= 48) condition = 'Foggy';
          else if (code >= 51 && code <= 67) condition = 'Rainy';
          else if (code >= 71 && code <= 77) condition = 'Snowy';
          else if (code >= 80 && code <= 82) condition = 'Showers';
          else if (code >= 95 && code <= 99) condition = 'Thunderstorm';

          setWeatherData({
            temperature: data.current_weather.temperature,
            condition: condition,
            isDay: data.current_weather.is_day === 1
          });
        }
      } catch (err) {
        console.error("Error fetching weather:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lng]);

  return { weatherData, isLoading, error };
}
