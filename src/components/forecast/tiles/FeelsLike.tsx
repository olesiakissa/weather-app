import Degree from '../Degree'
import TileHeader from './TileHeader'

type Props = { temp: number }

const FeelsLike = ({ temp }: Props) : JSX.Element => {
    return (
        <article className='tile flex col' id='tile-feels'>
            <TileHeader 
                tileId='feels-like' 
                heading='FEELS LIKE' />
            <Degree temp={temp} spanId='feels-like'/>
        </article>
    )
}

export default FeelsLike