import TileHeader from './TileHeader'
import { getPressureDescription } from '../../../utils'

type Props = { pressure: number }

const Pressure = ({ pressure }: Props) : JSX.Element => {
    return (
        <article className='tile flex col' id='tile-pressure'>
            <TileHeader 
                tileId='pressure' 
                heading='PRESSURE' />
            <p className='tile-large-text'>{pressure} hPa</p>    
            <p>{getPressureDescription(pressure)}</p>
        </article>
    )
}

export default Pressure