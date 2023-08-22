
import Search from './components/Search'
import Forecast from './components/Forecast'

import useForecast from './hooks/useForecast'

const App = (): JSX.Element => {
    const {
      searchInput,
      location,
      options,
      forecast,
      onInputChange,
      onOptionSelect,
      getForecast
  } = useForecast()

    return (
      <main>
        <h1>{location ? location.name : 'Weather'}</h1>
        {forecast ? 
        (
          <Forecast data={forecast}/>
        ) 
        : 
        (
          <Search 
          options={options}
          searchInput={searchInput}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          getForecast={getForecast}
          />
        )
        }
        
      </main>
    )
}

export default App