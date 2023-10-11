import { useAppContext } from '../../hooks/useAppContext';
import Hero from '../Hero';
import Carrousel from './Carrousel';
import Tiles from './Tiles';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { ForecastType } from '../../types';

const Forecast = (): JSX.Element | undefined => {
  const { forecast } = useAppContext() as {
    forecast: ForecastType | undefined;
  };

  if (forecast)
    return (
      <main>
        <section id='forecast' className='grid'>
          <Link
            to='/'
            aria-label='Back to Homepage'
            id='link-homepage'
            className='flex'
          >
            <FaArrowLeft />
          </Link>
          <Hero />
          <Carrousel />
          <Tiles />
        </section>
      </main>
    );
};

export default Forecast;
