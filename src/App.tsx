import AppContextProvider from './contexts/AppContextProvider';
import Forecast from './components/forecast/Forecast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/search/Search';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/forecast' element={<Forecast />} />
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  );
};

export default App;
