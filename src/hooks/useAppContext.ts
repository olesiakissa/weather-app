import { createContext, useContext } from 'react'

/**
 * General functionality for useForecast hook
 */
export const AppContext = createContext({})

export const useAppContext = () => useContext(AppContext)