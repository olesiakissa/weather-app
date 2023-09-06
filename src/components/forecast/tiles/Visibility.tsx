import { useAppContext } from '../../../hooks/useAppContext'
import TileHeader from './TileHeader'
import { getVisibilityDescription, getVisibilityValueInKm } from '../../../utils'

const Visibility = (): JSX.Element => {
	const { forecast } = useAppContext()
  const [ today ] = forecast.list

	return (
		<article className='tile flex col' id='tile-visibility'>
			<TileHeader 
					tileId='visibility' 
					heading='VISIBILITY' />
			<p className='tile-large-text'>{getVisibilityValueInKm(today.visibility)} km</p>    
			<p>{getVisibilityDescription(today.visibility)}</p>
		</article>
	)
}

export default Visibility