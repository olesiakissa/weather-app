import { useAppContext } from '../../../hooks/useAppContext';
import TileHeader from './TileHeader';
import { getTime } from '../../../utils';
import { ForecastType } from '../../../types';
import { WiHorizonAlt } from 'react-icons/wi';

const Sunlight = (): JSX.Element | undefined => {
  const { forecast } = useAppContext() as {
    forecast: ForecastType | undefined;
  };

  const timeSunrise = getTime(forecast && forecast.sunrise + forecast.timezone);
  const timeSunset = getTime(forecast && forecast.sunset + forecast.timezone);

  return (
    <article className='tile flex col' id='tile-sunlight'>
      <TileHeader
        tileId='sunlight'
        heading='SUNRISE'
        text={timeSunrise ? timeSunrise : null}
        icon={WiHorizonAlt}
      />
      <p>Sunset: {timeSunset ? timeSunset : ''}PM</p>
    </article>
  );
};

export default Sunlight;
