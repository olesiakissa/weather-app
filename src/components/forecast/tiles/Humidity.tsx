import { useAppContext } from '../../../hooks/useAppContext';
import TileHeader from './TileHeader';
import { getHumidityDescription } from '../../../utils';
import { ForecastType } from '../../../types';
import { WiRaindrop } from 'react-icons/wi';

const Humidity = (): JSX.Element => {
  const { forecast } = useAppContext() as {
    forecast: ForecastType | undefined;
  };

  let today;
  if (forecast) [today] = forecast.list;

  const humidity = getHumidityDescription(today && today.main.humidity);

  return (
    <article className='tile flex col' id='tile-humidity'>
      <TileHeader tileId='humidity' heading='HUMIDITY' icon={WiRaindrop} />
      <p className='tile-large-text'>{today!.main.humidity}%</p>
      <p>{humidity ? humidity : null}</p>
    </article>
  );
};

export default Humidity;
