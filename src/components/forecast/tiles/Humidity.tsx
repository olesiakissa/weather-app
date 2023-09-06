import { useAppContext } from '../../../hooks/useAppContext'
import TileHeader from './TileHeader'
import { getHumidityDescription } from '../../../utils'

const Humidity = (): JSX.Element => {
	const { forecast } = useAppContext()
  const [ today ] = forecast.list

	return (
		<article className='tile flex col' id='tile-humidity'>
				<TileHeader 
						tileId='humidity' 
						heading='HUMIDITY' />
				<p className='tile-large-text'>{today.main.humidity}%</p>    
				<p>{getHumidityDescription(today.main.humidity)}</p>
		</article>
	)
}

export default Humidity