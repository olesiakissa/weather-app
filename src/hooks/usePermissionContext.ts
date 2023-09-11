import { createContext, useContext } from 'react'

/**
 * Functionality based on location permission for LocalWeatherButton
 */
export const PermissionContext = createContext({})

export const usePermissionContext = () => useContext(PermissionContext)