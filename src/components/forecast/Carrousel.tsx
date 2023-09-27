import { useAppContext } from '../../hooks/useAppContext';
import { ForecastItemType, ForecastType } from '../../types/index';
import Degree from './Degree';

const Carrousel = () => {
  const { forecast } = useAppContext() as {
    forecast: ForecastType | undefined;
  };

  return (
    <section id='carrousel' className='flex'>
      {forecast &&
        forecast.list.length > 0 &&
        forecast.list.map(
          (item: Omit<ForecastItemType, 'sys' | 'dt_txt'>, index: number) => (
            <div
              key={index}
              className='item flex col'
              id={index === 0 ? 'current' : ''}
            >
              <p>
                {index === 0 ? 'Now' : `${new Date(item.dt * 1000).getHours()}:00`}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
              />
              <Degree temp={Math.round(item.main.temp)} />
            </div>
          )
        )}
    </section>
  );
};

export default Carrousel;
