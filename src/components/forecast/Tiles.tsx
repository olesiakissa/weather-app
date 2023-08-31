import Sunlight from './tiles/Sunlight'
import Pressure from './tiles/Pressure'
import Humidity from './tiles/Humidity'
import Visibility from './tiles/Visibility'
import Wind from './tiles/Wind'
import FeelsLike from './tiles/FeelsLike'

const Tiles = () => {
  return (
		<article className='grid' id='tiles'>
			<Sunlight  />
			<Pressure /> 
			<Humidity />           
			<Visibility />
			<Wind />
			<FeelsLike />
		</article>
  )
}

export default Tiles