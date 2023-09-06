import SearchInput from './SearchInput'
import SearchButton from './buttons/SearchButton'
// import LocalWeatherButton from './buttons/LocalWeatherButton'

const Search = (): JSX.Element => {
	return (
	<header  id='location-search' className='flex col'>
		<section className='flex'>
			<SearchInput />
			<SearchButton />
		</section>

		{/* todo: display LocalWeatherButton on using geo permissions */}
		{/* <LocalWeatherButton /> */}
	</header>
	)
}

export default Search