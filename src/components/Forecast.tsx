import { ForecastType, ForecastItemType } from '../types'
import Degree from './Degree'
import Sunlight from './Sunlight'

const Forecast = ( { data }: ForecastType): JSX.Element => {
  const [ today ] = data.list
  return (
    <article>
        <section>
            <h1>
              <Degree temp={Math.round(today.main.temp)} />
            </h1>
        </section>

        <section id="carrousel">
          {data.list.map((item: ForecastItemType, index: number) => (
            <div key={index} className='item'>
              <p>{index === 0 ? 'Now' : `${new Date(item.dt * 1000).getHours()}:00`}</p>
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
            timezone={data.timezone}/>
                      
        </section>
    </article>
  )
}

export default Forecast