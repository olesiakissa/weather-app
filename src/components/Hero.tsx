import { useAppContext } from '../hooks/useAppContext'
import Degree from './forecast/Degree'
import Home from '../assets/house.png'

const Hero = (): JSX.Element => {
  const { forecast } = useAppContext()
  const [ today ] = forecast.list

  return (
    <section id='hero' className='flex col'>
      <h1 id='hero-heading'>{forecast.name}</h1>
      <Degree temp={Math.round(today.main.temp)} spanId='degree'/>
      <div className='flex col'>
          <p id='description'>{today.weather[0].description}</p>
          <p>
            H:<Degree temp={Math.round(today.main.temp_max)}/> L:<Degree temp={Math.round(today.main.temp_min)}/>
          </p>
      </div>
      <img src={Home} alt='house logo' />
    </section>
  )
}

export default Hero