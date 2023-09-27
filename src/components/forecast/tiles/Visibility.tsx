import { useAppContext } from '../../../hooks/useAppContext';
import TileHeader from './TileHeader';
import {
  getVisibilityDescription,
  getVisibilityValueInKm,
} from '../../../utils';
import { ForecastType } from '../../../types';

const Visibility = (): JSX.Element => {
  const { forecast } = useAppContext() as {
    forecast: ForecastType | undefined;
  };

  let today;
  if (forecast) [today] = forecast.list;

  const visibilityKm = getVisibilityValueInKm(today && today.visibility);
  const visibilityDescription = getVisibilityDescription(
    today && today.visibility
  );

  return (
    <article className='tile flex col' id='tile-visibility'>
      <TileHeader tileId='visibility' heading='VISIBILITY' />
      <p className='tile-large-text'>{visibilityKm ? visibilityKm : null} km</p>
      <p>{visibilityDescription ? visibilityDescription : null}</p>
    </article>
  );
};

export default Visibility;
