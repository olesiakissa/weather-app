import { useContext } from 'react'
import { AppContext } from '../../../App'

import Degree from '../Degree'
import TileHeader from './TileHeader'

const FeelsLike = () : JSX.Element => {
	const { forecast } = useContext(AppContext)
	const [ today ] = forecast.list

	return (
		<article className='tile flex col' id='tile-feels'>
			<TileHeader 
					tileId='feels-like' 
					heading='FEELS LIKE' />
			<Degree 
				temp={Math.round(today.main.feels_like)} 
				spanId='feels-like'/>
		</article>
	)
}

export default FeelsLike