import { useAppContext } from '../../hooks/useAppContext';
import Hero from '../Hero';
import Carrousel from './Carrousel';
import Tiles from './Tiles';
import Search from '../search/Search';
import { ForecastType } from '../../types';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Forecast = (): JSX.Element => {
  const { forecast } = useAppContext() as {
    forecast: ForecastType | undefined;
  };

  return (
    <main>
      {forecast ? (
        <section id='forecast' className='grid'>
          <Link to='/' aria-label='Back to Homepage' id='link-homepage' className='flex'>
            <FaArrowLeft />
          </Link>
          <Hero />
          <Carrousel />
          <Tiles />
        </section>
      ) : (
        <Search />
      )}
    </main>
  );
};

export default Forecast;
