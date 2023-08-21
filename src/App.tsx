// todo 1: LOCATION PERMISSION CHECK + REFACTOR
// todo 2: COMPONENT REFACTORING

import { ChangeEvent, useEffect, useState } from 'react'
import { API_CALL_SEARCH, 
         API_CALL_LOCATION, 
         API_CALL_LIMIT 
} from './constants'
import { OptionType } from './types'
import { nanoid } from 'nanoid'

const App = (): JSX.Element => {
    // const [locationPermission, setLocationPermission] = useState<boolean>(false) 

    const [searchInput, setSearchInput] = useState<string>('')
    const [location, setLocation] = useState<OptionType | null>(null)
    const [options, setOptions] = useState<[]>([])

    useEffect(()=>{
      if (location) {
        setSearchInput(location.name)
        setOptions([])
      }

    }, [location])

    // if (navigator.geolocation)
    //   navigator.geolocation.getCurrentPosition( (position: GeolocationPosition) => {
    //     // fetch forecast based on position
    // })

    const getSearchLocations = async (value: string) => {
      try {
        const query = `${API_CALL_SEARCH}${value}&limit=${API_CALL_LIMIT}&appid=${import.meta.env.VITE_APP_API_KEY}`
        const response = await fetch(query)
        if (!response.ok) {
          throw new Error(`${response.status}: An error occurred while trying to fetch locations`)
        }
        const data = await response.json()
        setOptions(data)
      } catch (error) {
        console.error(error)
        return error
      }
    }


    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) : void => {
      const value = e.target.value.trim()
      setSearchInput(value)
      getSearchLocations(value)
    }

    const onOptionSelect = (option: OptionType) => {
      setLocation(option)
    }

    const getForecast = async () => {
      if (!location) return

      const {lat, lon} = location
      try {
        const query = `${API_CALL_LOCATION}lat=${lat}&lon=${lon}&units={metric}&appid=${import.meta.env.VITE_APP_API_KEY}`
        const response = await fetch(query)
        if (!response.ok) {
          throw new Error(`${response.status}: An error occurred while trying to weather for a specified location`)
        }
        const data = await response.json()

        //todo: remove after test
        console.info(data) 
      } catch (error) {
        console.error(error)
        return error
      }
    }

    return (
      <main>
        <header>
          <h1>{location ? location.name : 'Enter Location'}</h1>
          <section id='location-search' className='flex'>
            <input type="search" 
                   value={searchInput}
                   placeholder='Search for a city or a country'
                   onChange={(e) => handleOnChange(e)}/> 
            <button id='search-btn' onClick={() => getForecast()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
              <path d="M1 1L7 7L1 13" stroke="#FFF" strokeWidth="2"/>
            </svg>
              <span className='visually-hidden'>
                Search
              </span>
            </button>

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
      </main>
    )
}

export default App