import SearchInput from './SearchInput'
import SearchButton from './buttons/SearchButton'
import LocalWeatherButton from './buttons/LocalWeatherButton'
import LocationPermissionContextProvider from '../../contexts/LocationPermissionContextProvider'

const Search = (): JSX.Element => {
	return (
	<header  id='location-search' className='flex col'>
		<section className='flex'>
			<SearchInput />
			<SearchButton />
		</section>

		<LocationPermissionContextProvider>
			<LocalWeatherButton />
		</LocationPermissionContextProvider>
	</header>
	)
}

export default Search