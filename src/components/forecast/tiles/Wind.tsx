import { useContext } from 'react'
import { AppContext } from '../../../App'

import TileHeader from './TileHeader'
import { getWindSpeedInKm, getWindDirection } from '../../../utils'

const Wind = (): JSX.Element => {
	const { forecast } = useContext(AppContext)
	const [ today ] = forecast.list
	
	return (
		<article className='tile flex col' id='tile-wind'>
			<TileHeader 
					tileId='wind' 
					heading='WIND' />
			<p className='tile-large-text'>{getWindSpeedInKm(today.wind.speed)} km/h</p> 
			<p>Direction: {getWindDirection(today.wind.speed)}</p>   
		</article>
	)
}

export default Wind