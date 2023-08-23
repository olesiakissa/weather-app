import TileHeader from './tiles/TileHeader'
import { getTime } from '../utils'

type Props = {
  sunrise: number
  sunset: number
  timezone: number
}

const Sunlight = ({sunrise, sunset, timezone}: Props): JSX.Element => {
  return (
    <article className='tile flex' id='tile-sunlight'>
        <TileHeader 
          tileId='sunlight' 
          heading='SUNRISE' 
          text={getTime(sunrise + timezone)} />
        <p>Sunset: {getTime(sunset + timezone)}PM</p>
    </article>
  )
}

export default Sunlight