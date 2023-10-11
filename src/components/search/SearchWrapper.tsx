import { lazy, Suspense } from 'react';
import Loader from '../Loader';

const Search = lazy(() => import('./Search'));

const SearchWrapper = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Search />
    </Suspense>
  );
};

export default SearchWrapper;
