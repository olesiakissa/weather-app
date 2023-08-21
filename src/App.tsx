
import Search from './components/Search'
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
        <h1>{location ? location.name : 'Enter Location'}</h1>
        {forecast ? 
        (
          <section>{forecast.sunrise}</section>
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