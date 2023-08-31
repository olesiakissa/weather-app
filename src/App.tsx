
import { createContext } from 'react'
import Search from './components/Search'
import Forecast from './components/forecast/Forecast'

import useForecast from './hooks/useForecast'
import { SearchPropsType } from './types'

export const AppContext = createContext<SearchPropsType |undefined>(undefined)

const App = (): JSX.Element => {
    const {
      searchInput,
      options,
      forecast,
      onInputChange,
      onOptionSelect,
      getForecast
      } = useForecast()

  return (
    <AppContext.Provider value={{
        searchInput, 
        options, 
        forecast, 
        onOptionSelect,
        onInputChange,
        getForecast
      }}>
      <main>
        {forecast ? <Forecast /> : <Search />}
      </main>
    </AppContext.Provider>
  )
}

export default App