import { ChangeEvent, useEffect, useState } from 'react';
import {
  API_CALL_SEARCH,
  API_CALL_LIMIT,
  API_CALL_LOCATION,
  API_UNITS,
} from '../constants';
import { OptionType, ForecastType } from '../types';

const useForecast = () => {
  const [searchInput, setSearchInput] = useState<string | undefined>('');
  const [location, setLocation] = useState<OptionType | null>(null);
  const [options, setOptions] = useState<[] | undefined>([]);
  const [forecast, setForecast] = useState<ForecastType | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (location) {
      setSearchInput(location.name);
      setOptions([]);
    }
  }, [location]);

  const getSearchLocations = async (value: string) => {
    if (!value) return;

    try {
      const query = `${API_CALL_SEARCH}${value}&limit=${API_CALL_LIMIT}&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`;
      const response = await fetch(query);
      if (!response.ok) {
        throw new Error(
          `${response.status}: An error occurred while trying to fetch locations`
        );
      }
      const data = await response.json();
      setOptions(data);
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.trim();
    if (!value) setOptions([]);
    setSearchInput(value);
    getSearchLocations(value);
  };

  const onOptionSelect = (option: OptionType): void => {
    if (
      option &&
      (option.lat !== location?.lat || option.lon !== location?.lon)
    )
      setLocation(option);
  };

  const getForecast = async (
    locationValue: OptionType | null
  ): Promise<ForecastType> => {
    return new Promise((resolve, reject) => {
      if (!locationValue) {
        reject(new Error('Location is not available'));
        return;
      }

      const { lat, lon } = locationValue;
      try {
        const query = `${API_CALL_LOCATION}lat=${lat}&lon=${lon}&units=${API_UNITS}&appid=${
          import.meta.env.VITE_APP_API_KEY
        }`;
        fetch(query)
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `${response.status}: An error occurred while trying to fetch weather for a specified location`
              );
            }
            return response.json();
          })
          .then((data) => {
            const forecastData = {
              ...data.city,
              list: data.list.slice(0, 16),
            };
            setForecast(forecastData);
            resolve(forecastData);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    searchInput,
    setSearchInput,
    location,
    setLocation,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    getForecast,
    loading,
    setLoading,
  };
};

export default useForecast;
