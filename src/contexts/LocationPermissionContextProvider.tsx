import { PropsWithChildren } from 'react'
import { PermissionContext } from '../hooks/usePermissionContext'
import useGeoLocation from '../hooks/useGeoLocation'

const LocationPermissionContextProvider: React.FC<PropsWithChildren<unknown>> = ( {children} ) : JSX.Element => {
  const functionality = useGeoLocation()

  return (
    <PermissionContext.Provider value={{...functionality}}>
      { children }
    </PermissionContext.Provider>
  )
}

export default LocationPermissionContextProvider