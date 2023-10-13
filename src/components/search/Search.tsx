import SearchInput from './SearchInput';
import SearchButton from './buttons/SearchButton';
import LocalWeatherButton from './buttons/LocalWeatherButton';
import { useState } from 'react';

const Search = (): JSX.Element => {
  const [shouldFocusSearchButton, setShouldFocusSearchButton] = useState(false);
  const [shouldExecuteClick, setShouldExecuteClick] = useState(true);
  return (
    <div id='header-container' className='flex'>
      <header id='location-search' className='flex col'>
        <section className='flex'>
          <SearchInput
            setShouldFocusSearchButton={setShouldFocusSearchButton}
            setShouldExecuteClick={setShouldExecuteClick}
          />
          <SearchButton
            shouldFocus={shouldFocusSearchButton}
            shouldExecuteClick={shouldExecuteClick}
            setShouldExecuteClick={setShouldExecuteClick}
          />
        </section>
        <LocalWeatherButton />
      </header>
    </div>
  );
};

export default Search;
