import TileHeader from './TileHeader'
import { getHumidityDescription } from '../../../utils'

type Props = { humidity: number }

const Humidity = ({humidity}: Props): JSX.Element => {
    return (
        <article className='tile flex col' id='tile-humidity'>
            <TileHeader 
                tileId='humidity' 
                heading='HUMIDITY' />
            <p className='tile-large-text'>{humidity}%</p>    
            <p>{getHumidityDescription(humidity)}</p>
        </article>
    )
}

export default Humidity