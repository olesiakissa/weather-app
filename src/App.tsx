
import ContextProvider from './contexts/ContextProvider'
import Forecast from './components/forecast/Forecast'

const App = (): JSX.Element => {
  return (
    <main>
      <ContextProvider>
        <Forecast />
      </ContextProvider>
    </main>
  )
}

export default App