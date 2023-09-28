import SearchInput from './SearchInput';
import SearchButton from './buttons/SearchButton';
import LocalWeatherButton from './buttons/LocalWeatherButton';

const Search = (): JSX.Element => {
  return (
    <header id='location-search' className='flex col'>
      <section className='flex'>
        <SearchInput />
        <SearchButton />
      </section>

      <LocalWeatherButton />
    </header>
  );
};

export default Search;
