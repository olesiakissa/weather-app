import { useAppContext } from '../../hooks/useAppContext';
import Hero from '../Hero';
import Carrousel from './Carrousel';
import Tiles from './Tiles';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { ForecastType } from '../../types';
import Loader from '../Loader';

const Forecast = (): JSX.Element => {
  const { forecast } = useAppContext() as {
    forecast: ForecastType | undefined;
  };

  return forecast ? (
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
  ) : (
    <Loader />
  );
};

export default Forecast;
