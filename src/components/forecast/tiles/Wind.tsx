import { useAppContext } from '../../../hooks/useAppContext';
import TileHeader from './TileHeader';
import { getWindSpeedInKm, getWindDirection } from '../../../utils';
import { ForecastType } from '../../../types';
import { WiStrongWind } from 'react-icons/wi';

const Wind = (): JSX.Element => {
  const { forecast } = useAppContext() as {
    forecast: ForecastType | undefined;
  };

  let today;
  if (forecast) [today] = forecast.list;

  const windSpeed = getWindSpeedInKm(today && today.wind.speed);
  const windDirection = getWindDirection(today && today.wind.speed);

  return (
    <article className='tile flex col' id='tile-wind'>
      <TileHeader tileId='wind' heading='WIND' icon={WiStrongWind} />
      <p className='tile-large-text'>{windSpeed ? windSpeed : null} km/h</p>
      <p>Direction: {windDirection ? windDirection : null}</p>
    </article>
  );
};

export default Wind;
