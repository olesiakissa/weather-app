import { useAppContext } from '../../../hooks/useAppContext'
import { ForecastType } from '../../../types'
import Degree from '../Degree'
import TileHeader from './TileHeader'

const FeelsLike = () : JSX.Element => {
	const { forecast } = useAppContext() as {
    forecast: ForecastType | undefined
  }

	let today;

	if (forecast)
		[ today ] = forecast.list

	return (
		<article className='tile flex col' id='tile-feels'>
			<TileHeader 
					tileId='feels-like' 
					heading='FEELS LIKE' />
			<Degree 
				temp={Math.round(today!.main.feels_like)} 
				id='feels-like'/>
		</article>
	)
}

export default FeelsLike