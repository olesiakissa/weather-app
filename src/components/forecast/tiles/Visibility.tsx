import TileHeader from './TileHeader'
import { getVisibilityDescription, getVisibilityValueInKm } from '../../../utils'

type Props = { visibility: number }

const Visibility = ({ visibility }: Props): JSX.Element => {
    return (
        <article className='tile flex col' id='tile-visibility'>
            <TileHeader 
                tileId='visibility' 
                heading='VISIBILITY' />
            <p className='tile-large-text'>{getVisibilityValueInKm(visibility)} km</p>    
            <p>{getVisibilityDescription(visibility)}</p>
        </article>
    )
}

export default Visibility