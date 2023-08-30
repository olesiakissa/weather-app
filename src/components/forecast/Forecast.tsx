import { ForecastType, ForecastItemType } from '../../types'
import Degree from './Degree'
import Sunlight from './tiles/Sunlight'
import Hero from '../Hero'
import Pressure from './tiles/Pressure'
import Humidity from './tiles/Humidity'
import Visibility from './tiles/Visibility'
import Wind from './tiles/Wind'
import FeelsLike from './tiles/FeelsLike'

const Forecast = ( { data }: ForecastType): JSX.Element => {
  const [ today ] = data.list
  return (
    <article id='forecast'>
        <Hero 
          name={data.name}
          desc={today.weather[0].description}
          temp={Math.round(today.main.temp)}
          max={Math.round(today.main.temp_max)}
          min={Math.round(today.main.temp_min)} />

        <section id='carrousel' className='flex'>
          {data.list.map((item: ForecastItemType, index: number) => (
            <div key={index} className='item flex col' id={index === 0 ? 'current' : ''}>
              <p>
                {index === 0 ? 'Now' : `${new Date(item.dt * 1000).getHours()}:00`}
              </p>
              <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} 
                   alt={item.weather[0].description} />
              <Degree temp={Math.round(item.main.temp)} />
            </div>
          ))}
        </section>

        {/* Additional tiles */}
        <section className='grid' id='tiles'>
          <Sunlight 
            sunrise={data.sunrise} 
            sunset={data.sunset} 
            timezone={data.timezone} />

          <Pressure pressure={today.main.pressure}/> 

          <Humidity humidity={today.main.humidity}/>           

          <Visibility visibility={today.visibility} />

          <Wind 
            direction={today.wind.deg} 
            speed={today.wind.speed} />
          <FeelsLike temp={Math.round(today.main.feels_like)} />
        </section>
    </article>
  )
}

export default Forecast