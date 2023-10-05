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
import { BiCurrentLocation } from 'react-icons/bi';
import { TbCurrentLocationOff } from 'react-icons/tb';

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

  const shouldTriggerEffect = useRef<boolean>(false);

  const retrieveUserLocation = async (): Promise<OptionType | undefined> => {
    return new Promise<OptionType | undefined>((resolve) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            setLocationPermission(LOCATION_PERMISSION_GRANTED);
            const ul: OptionType = {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            };
            resolve(ul);
          },
          () => {
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
    if (shouldTriggerEffect.current) {
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
        currentLocation &&
        currentLocation.lat !== location?.lat &&
        currentLocation.lon !== location?.lon
      ) {
        shouldTriggerEffect.current = true;
        setLocation(currentLocation);
      }
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
        className={`flex ${options && (options.length > 0 ? 'hidden' : '')}`}
      >
        <button
          type='button'
          disabled={locationPermission === LOCATION_PERMISSION_DENIED}
          onClick={handleClick}
          data-tooltip-id='tt-location'
          data-tooltip-content={WARNING_MSG}
          data-tooltip-place='top'
        >
          Local forecast{' '}
          {locationPermission === LOCATION_PERMISSION_DENIED ? (
            <TbCurrentLocationOff id='location-icon' />
          ) : (
            <BiCurrentLocation id='location-icon' />
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
