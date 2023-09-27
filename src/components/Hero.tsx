import { useAppContext } from '../hooks/useAppContext'
import Degree from './forecast/Degree'
import Home from '../assets/house.png'
import { ForecastType } from '../types'

const Hero = (): JSX.Element => {
  const { forecast } = useAppContext() as {
    forecast: ForecastType | undefined
  }

  let today;
  if (forecast)
    [ today ] = forecast.list

  return (
    <section id='hero' className='flex col'>
      <h1 id='hero-heading'>{forecast && forecast.name}</h1>
      <Degree temp={Math.round(today!.main.temp)} id='degree'/>
      <div className='flex col'>
          <p id='description'>{today!.weather[0].description}</p>
          <div>
            H: <Degree temp={Math.round(today!.main.temp_max)} id='high'/> L: <Degree temp={Math.round(today!.main.temp_min)} id='low'/>
          </div>
      </div>
      <img src={Home} alt='house logo' />
    </section>
  )
}

export default Hero