import { useAppContext } from '../../hooks/useAppContext'
import Hero from '../Hero'
import Carrousel from './Carrousel'
import Tiles from './Tiles'
import Search from '../search/Search'
import { ForecastType } from '../../types'

const Forecast = (): JSX.Element => {
  const { forecast } = useAppContext() as {
    forecast: ForecastType | undefined
  }

  return (
    <main>
      {forecast 
        ?     
        <section id='forecast'>
          <Hero />
          <Carrousel />
          <Tiles />
        </section>
        : 
        <Search />  
      } 
    </main>
  )
}

export default Forecast