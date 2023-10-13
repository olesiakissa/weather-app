import { ChangeEvent } from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import SearchOptions from './SearchOptions';


type Props = {
  setShouldFocusSearchButton: (shouldFocus: boolean) => void
  setShouldExecuteClick: (shouldExecute: boolean) => void
}
const SearchInput = ({ setShouldFocusSearchButton, setShouldExecuteClick }: Props): JSX.Element => {
  const { searchInput, onInputChange } = useAppContext() as {
    searchInput: string | undefined;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };

  return (
    <>
      <input
        name='searchInput'
        autoFocus
        type='search'
        value={searchInput || ''}
        placeholder='Search for a location'
        onChange={(e) => onInputChange(e)}
      />
      {searchInput && searchInput?.length > 0 && <SearchOptions setShouldFocusSearchButton={setShouldFocusSearchButton} setShouldExecuteClick={setShouldExecuteClick}/>}
    </>
  );
};

export default SearchInput;
