import { lazy, Suspense } from 'react';
import Loader from '../Loader';

const Forecast = lazy(() => import('./Forecast'));

const ForecastWrapper = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Forecast />
    </Suspense>
  );
};

export default ForecastWrapper;
