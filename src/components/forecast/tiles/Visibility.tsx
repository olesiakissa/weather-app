import { useContext } from 'react'
import { AppContext } from '../../../App'

import TileHeader from './TileHeader'
import { getVisibilityDescription, getVisibilityValueInKm } from '../../../utils'

const Visibility = (): JSX.Element => {
	const { forecast } = useContext(AppContext)
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