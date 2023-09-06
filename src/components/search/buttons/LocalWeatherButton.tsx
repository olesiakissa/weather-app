import { useAppContext } from '../../../hooks/useAppContext'

const LocalWeatherButton = (): JSX.Element => {
  const { getForecast } = useAppContext()

  return (
    <button id='btn-local-weather'
            type='button'
            onClick={() => getForecast()}>
            Local weather
    </button>
  )
}

export default LocalWeatherButton