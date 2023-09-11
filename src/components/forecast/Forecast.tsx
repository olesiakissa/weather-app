import { useAppContext } from '../../hooks/useAppContext'
import Hero from '../Hero'
import Carrousel from './Carrousel'
import Tiles from './Tiles'
import Search from '../search/Search'

const Forecast = (): JSX.Element => {
  const { forecast } = useAppContext()

  return (
    <article>
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
    </article>
  )
}

export default Forecast