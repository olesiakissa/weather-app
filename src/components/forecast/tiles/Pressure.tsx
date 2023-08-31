import { useContext } from 'react'
import { AppContext } from '../../../App'

import TileHeader from './TileHeader'
import { getPressureDescription } from '../../../utils'

const Pressure = () : JSX.Element => {
  const { forecast } = useContext(AppContext)
  const [ today ] = forecast.list

	return (
		<article className='tile flex col' id='tile-pressure'>
			<TileHeader 
					tileId='pressure' 
					heading='PRESSURE' />
			<p className='tile-large-text'>{today.main.pressure} hPa</p>    
			<p>{getPressureDescription(today.main.pressure)}</p>
		</article>
	)
}

export default Pressure