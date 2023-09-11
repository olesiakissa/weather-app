import { useState, useEffect } from 'react'
import { useAppContext } from '../../../hooks/useAppContext'
import { usePermissionContext } from '../../../hooks/usePermissionContext'
import { Tooltip } from 'react-tooltip'
import { WARNING_MSG } from '../../../constants'

const LocalWeatherButton = (): JSX.Element => {
  const { getForecast, location, options } = useAppContext()
  const { locationPermissionGiven } = usePermissionContext()

  const [screenSize, setScreenSize] = useState<number>(screen.width)

  useEffect(() => {
    function handleResize() {
      setScreenSize(screen.width)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [screenSize])

  const displayTextWarning = screenSize <= 768 && !locationPermissionGiven
    return (
      <>
      <button id='btn-local-weather'
              className={ options.length > 0 ? 'hidden' : ''}
              type='button'
              disabled={ !locationPermissionGiven }
              onClick={ () => {
                if (locationPermissionGiven && location)
                  getForecast()
              } }
              data-tooltip-id='tt-location'
              data-tooltip-content={WARNING_MSG}
              data-tooltip-place='top'
              data-tooltip-delay-show={250}
              >
              Local weather
      </button>

      {/* Notify user with tooltip or regular text (based on the device size)
      to give permission to location */}
      { !locationPermissionGiven && !displayTextWarning && <Tooltip id='tt-location' style={{maxWidth: 325}}/> }

      { displayTextWarning && <p id='text-warning'>{WARNING_MSG}</p> }
      </>
    )
  
}

export default LocalWeatherButton