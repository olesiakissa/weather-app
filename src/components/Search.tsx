import { OptionType, SearchPropsType } from '../types'
import { nanoid } from 'nanoid'

const Search = ({options, 
                searchInput, 
                onInputChange, 
                onOptionSelect, 
                getForecast} : SearchPropsType): JSX.Element => {

    return (
    <header>
        
        <section id='location-search' className='flex'>
        <input type="search" 
                value={searchInput}
                placeholder='Search for a city or a country'
                onChange={(e) => onInputChange(e)}/> 
        <button id='search-btn' onClick={() => getForecast()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
            <path d="M1 1L7 7L1 13" stroke="#FFF" strokeWidth="2"/>
        </svg>
            <span className='visually-hidden'>
            Search
            </span>
        </button>

        {/* todo: create a location component */}
        <section id='locations'>
            <ul>
            {options.length > 0 && options.map( (option: OptionType) => (
                <li key={nanoid()}>
                <button className='location-option'
                        onClick={() => onOptionSelect(option)}>
                            {option.name}
                </button>
                </li>
            ))}
            </ul>
        </section>
        </section>
    </header>
    )
}

export default Search