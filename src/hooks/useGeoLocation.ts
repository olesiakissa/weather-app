import { useState, useEffect } from 'react'
import { useAppContext } from './useAppContext'

type UserLocation = {
  lat: number
  lon: number
}

const useGeoLocation = () => {
  const { setLocation } = useAppContext()
  const [locationPermissionGiven, setLocationPermissionGiven] = useState(false)
  
  useEffect(() => {
    if (isLocationSupported()) {
      setLocationPermissionGiven(true)
      retrieveUserLocation()
    }
  }, [])

  const isLocationSupported = (): boolean => {
    return navigator.geolocation !== undefined
  }
  
  const retrieveUserLocation = (): void => {
    let ul: UserLocation | undefined = undefined
    navigator.geolocation.getCurrentPosition( (position: GeolocationPosition) => {
        ul = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }
        if (ul) 
          setLocation(ul)
    })
  
  }

  return {
    locationPermissionGiven,
    retrieveUserLocation
  }
}

export default useGeoLocation