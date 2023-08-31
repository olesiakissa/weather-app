import { useContext } from 'react'
import { AppContext } from '../../../App'

import TileHeader from './TileHeader'
import { getTime } from '../../../utils'

const Sunlight = (): JSX.Element => {
  const { forecast } = useContext(AppContext)
  
  return (
    <article className='tile flex col' id='tile-sunlight'>
        <TileHeader 
          tileId='sunlight' 
          heading='SUNRISE' 
          text={getTime(forecast.sunrise + forecast.timezone)} />
        <p>Sunset: {getTime(forecast.sunset + forecast.timezone)}PM</p>
    </article>
  )
}

export default Sunlight