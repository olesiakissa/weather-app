
import AppContextProvider from './contexts/AppContextProvider'
import Forecast from './components/forecast/Forecast'

const App = (): JSX.Element => {
  return (
    <main>
      <AppContextProvider>
        <Forecast />
      </AppContextProvider>
    </main>
  )
}

export default App