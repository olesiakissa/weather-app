import { ChangeEvent } from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import SearchOptions from './SearchOptions';

const SearchInput = (): JSX.Element => {
  const { searchInput, onInputChange } = useAppContext() as {
    searchInput: string | undefined;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };

  return (
    <>
      <input
        type='search'
        value={searchInput || ''}
        placeholder='Search for a location'
        onChange={(e) => onInputChange(e)}
      />
      {searchInput && searchInput?.length > 0 && <SearchOptions />}
    </>
  );
};

export default SearchInput;
