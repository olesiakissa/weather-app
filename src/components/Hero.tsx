import { useAppContext } from '../hooks/useAppContext';
import Degree from './forecast/Degree';
import Home from '../assets/house.png';
import { ForecastType, OptionType } from '../types';

const Hero = (): JSX.Element => {
  const { forecast, location } = useAppContext() as {
    forecast: ForecastType | undefined;
    location: OptionType | null;
  };

  let today;
  if (forecast) [today] = forecast.list;

  const newHeadingText = `${forecast?.name}${
    location ? `, ${location.name}` : ''
  }${location && location.state ? `, ${location.state}` : ''}`;

  return (
    <section id='hero' className='flex col'>
      <h1 id='hero-heading'>{newHeadingText}</h1>
      <Degree temp={Math.round(Number(today?.main.temp))} id='degree' />
      <div className='flex col'>
        <p id='description'>{today?.weather[0]?.description}</p>
        <div id='lowhigh-container'>
          <p>H: </p>
          <Degree temp={Math.round(Number(today?.main.temp_max))} id='high' />
          <p> L:</p>{' '}
          <Degree temp={Math.round(Number(today?.main.temp_min))} id='low' />
        </div>
      </div>
      <div className='image-container'>
        <div className='placeholder-image'></div>
        <img src={Home} alt='house logo' loading='lazy' />
      </div>
    </section>
  );
};

export default Hero;
