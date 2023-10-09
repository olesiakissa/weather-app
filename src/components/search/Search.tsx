import SearchInput from './SearchInput';
import SearchButton from './buttons/SearchButton';
import LocalWeatherButton from './buttons/LocalWeatherButton';

const Search = (): JSX.Element => {
  return (
    <div id='header-container' className='flex'>
      <header id='location-search' className='flex col'>
        <section className='flex'>
          <SearchInput />
          <SearchButton />
        </section>
        <LocalWeatherButton />
      </header>
    </div>
  );
};

export default Search;
