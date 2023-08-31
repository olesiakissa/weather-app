import Hero from '../Hero'
import Carrousel from './Carrousel'

import Tiles from './Tiles'

const Forecast = (): JSX.Element => {
  return (
    <article id='forecast'>
        <Hero />

        <Carrousel />

        <Tiles />
    </article>
  )
}

export default Forecast