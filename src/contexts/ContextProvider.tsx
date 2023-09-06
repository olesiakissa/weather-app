import { PropsWithChildren } from 'react'
import { AppContext } from '../hooks/useAppContext'
import useForecast from '../hooks/useForecast'

const ContextProvider: React.FC<PropsWithChildren<unknown>> = ( {children} ) : JSX.Element => {
  const functionality = useForecast()

  return (
    <AppContext.Provider value={{...functionality}}>
      { children }
    </AppContext.Provider>
  )
}

export default ContextProvider