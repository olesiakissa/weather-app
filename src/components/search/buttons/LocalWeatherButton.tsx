import { useState, useEffect, useRef } from 'react';
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

const LocalWeatherButton = (): JSX.Element => {
  const { getForecast, location, setLocation, options } = useAppContext() as {
    getForecast: () => void;
    location: OptionType | null;
    setLocation: (value: OptionType | null) => void;
    options: [] | undefined;
  };

  const [locationPermission, setLocationPermission] = useState<string>(
    localStorage.getItem('locationPermission') || LOCATION_PERMISSION_PROMPT
  );
  const [screenSize, setScreenSize] = useState<number>(screen.width);
  const shouldTriggerEffect = useRef<boolean>(false);

  const retrieveUserLocation = async (): Promise<OptionType | undefined> => {
    return new Promise<OptionType | undefined>((resolve) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            localStorage.setItem('locationPermission', 'granted');
            setLocationPermission(LOCATION_PERMISSION_GRANTED);
            const ul: OptionType = {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            };
            resolve(ul);
          },
          () => {
            localStorage.setItem('locationPermission', 'denied');
            setLocationPermission(LOCATION_PERMISSION_DENIED);
            resolve(undefined);
          }
        );
      } else {
        resolve(undefined);
      }
    });
  };

  useEffect(() => {
    if (location && shouldTriggerEffect.current) {
      getForecast();
      shouldTriggerEffect.current = false;
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

  const handleClick = async () => {
    try {
      const currentLocation = await retrieveUserLocation();
      if (
        (currentLocation &&
          currentLocation.lat !== location?.lat &&
          currentLocation.lon !== location?.lon) ||
        location === null
      ) {
        shouldTriggerEffect.current = true;
        setLocation(currentLocation ?? null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Link
        to={
          locationPermission === LOCATION_PERMISSION_GRANTED && location
            ? '/forecast'
            : ''
        }
        id='link-local-weather'
        className={`flex ${options && (options.length > 0 ? 'hidden' : '')}`}
      >
        <button
          type='button'
          className='flex'
          disabled={locationPermission === LOCATION_PERMISSION_DENIED}
          onClick={handleClick}
          data-tooltip-id='tt-location'
          data-tooltip-content={WARNING_MSG}
          data-tooltip-place='top'
        >
          Local forecast{' '}
          {locationPermission === LOCATION_PERMISSION_DENIED ? (
            <svg
              id='location-icon'
              width='30px'
              height='18px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 3V5M12 5C15.866 5 19 8.13401 19 12M12 5C11.5608 5 11.131 5.04045 10.7142 5.11783M12 19V21M12 19C8.13401 19 5 15.866 5 12M12 19C13.933 19 15.683 18.2165 16.9497 16.9497M3 12H5M5 12C5 10.065 5.78512 8.3134 7.05417 7.04634M19 12H21M19 12C19 12.4385 18.9597 12.8675 18.8826 13.2837M12 15C10.3431 15 9 13.6569 9 12M12 15C12.7684 15 13.4692 14.7111 14 14.2361M12 15C12.8274 15 13.5766 14.665 14.1194 14.1233M9 12C9 11.2316 9.28885 10.5308 9.76389 10M9 12C9 11.1716 9.33579 10.4216 9.87868 9.87868M3 3L21 21'
                stroke='#000000'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          ) : (
            <svg
              id='location-icon'
              width='30px'
              height='18px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M19 12C19 15.866 15.866 19 12 19M19 12C19 8.13401 15.866 5 12 5M19 12H21M12 19C8.13401 19 5 15.866 5 12M12 19V21M5 12C5 8.13401 8.13401 5 12 5M5 12H3M12 5V3M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z'
                stroke='#FFF'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          )}
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
