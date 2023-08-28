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
                placeholder='Search for a location'
                onChange={(e) => onInputChange(e)}/> 
        <button id='search-btn' type='button' onClick={() => getForecast()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
            <path d="M1 1L7 7L1 13" stroke="#FFF" strokeWidth="2"/>
        </svg>
            <span className='visually-hidden'>
            Search
            </span>
        </button>

        {searchInput.length > 0 && (
        <section id='locations'>
            <ul>
            {options.map( (option: OptionType) => (
                <li key={nanoid()}>
                <button className='location-option'
                        onClick={() => onOptionSelect(option)}>
                            {option.name}, {option.country}
                </button>
                </li>
            ))}
            </ul>
        </section>
        )}

        </section>
    </header>
    )
}

export default Search