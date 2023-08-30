import TileHeader from './TileHeader'
import { getWindSpeedInKm, getWindDirection } from '../../../utils'

type Props = { 
    direction: number
    speed: number
}

const Wind = ({ direction, speed }: Props): JSX.Element => {
    return (
        <article className='tile flex col' id='tile-wind'>
            <TileHeader 
                tileId='wind' 
                heading='WIND' />
            <p className='tile-large-text'>{getWindSpeedInKm(speed)} km/h</p> 
            <p>Direction: {getWindDirection(direction)}</p>   
        </article>
    )
}

export default Wind