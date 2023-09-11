import { useAppContext } from '../../hooks/useAppContext'
import SearchOptions from './SearchOptions'

const SearchInput = (): JSX.Element => {
  const { searchInput, onInputChange } = useAppContext()

  return (
    <>
       <input type='search' 
              value={searchInput}
              placeholder='Search for a location'
              onChange={(e) => onInputChange(e)} /> 
      {searchInput?.length > 0 && <SearchOptions />}
    </>
  )
}

export default SearchInput