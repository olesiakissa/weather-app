import { useState, useEffect } from 'react';
import { useAppContext } from '../../../hooks/useAppContext';
import { Tooltip } from 'react-tooltip';
import {
  WARNING_MSG,
  LOCATION_PERMISSION_GRANTED,
  LOCATION_PERMISSION_PROMPT,
  LOCATION_PERMISSION_DENIED,
} from '../../../constants';
import { OptionType } from '../../../types';
import { Link } from 'react-router-dom';

type UserLocation = {
  lat: number;
  lon: number;
};

const LocalWeatherButton = (): JSX.Element => {
  const { getForecast, location, setLocation, options } = useAppContext() as {
    getForecast: () => void;
    location: OptionType | null;
    setLocation: (value: OptionType | null) => void;
    options: [] | undefined;
  };

  const [screenSize, setScreenSize] = useState<number>(screen.width);
  const [locationPermission, setLocationPermission] = useState<string>(
    LOCATION_PERMISSION_PROMPT
  );

  const retrieveUserLocation = (): void => {
    let ul: UserLocation | undefined = undefined;
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setLocationPermission(LOCATION_PERMISSION_GRANTED);
          ul = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          if (ul) setLocation(ul);
        },
        () => {
          setLocationPermission(LOCATION_PERMISSION_DENIED);
        }
      );
    }
  };

  useEffect(() => {
    if (location) {
      getForecast();
    }
  }, [location, getForecast]);

  useEffect(() => {
    function handleResize() {
      setScreenSize(screen.width);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [screenSize]);

  const displayTextWarningMobile =
    screenSize <= 768 && locationPermission === LOCATION_PERMISSION_DENIED;

  const handleClick = () => {
    try {
      retrieveUserLocation();
      if (location) getForecast();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Link
        to={
          locationPermission === LOCATION_PERMISSION_GRANTED ? '/forecast' : ''
        }
        id='link-local-weather'
        className={`flex ${options && (options?.length > 0 ? 'hidden' : '')}`}
      >
        <button
          type='button'
          disabled={locationPermission === LOCATION_PERMISSION_DENIED}
          onClick={handleClick}
          data-tooltip-id='tt-location'
          data-tooltip-content={WARNING_MSG}
          data-tooltip-place='top'
        >
          Local weather
        </button>
      </Link>

      {/* Notify user with tooltip or regular text (based on the device size)
      to give permission to location */}
      {locationPermission === LOCATION_PERMISSION_DENIED &&
        !displayTextWarningMobile && (
          <Tooltip id='tt-location' style={{ maxWidth: 325 }} />
        )}

      {displayTextWarningMobile && <p id='text-warning'>{WARNING_MSG}</p>}
    </>
  );
};

export default LocalWeatherButton;
