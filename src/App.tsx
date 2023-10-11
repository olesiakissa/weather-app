import AppContextProvider from './contexts/AppContextProvider';
import SearchWrapper from './components/search/SearchWrapper';
import ForecastWrapper from './components/forecast/ForecastWrapper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route path='/' element={<SearchWrapper />} />
          <Route path='/forecast' element={<ForecastWrapper />} />
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  );
};

export default App;
