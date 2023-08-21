// todo 1: LOCATION PERMISSION CHECK + REFACTOR (for Search component)

import { ChangeEvent, useEffect, useState } from "react"
import { API_CALL_SEARCH, API_CALL_LIMIT, API_CALL_LOCATION } from "../constants"
import { OptionType, ForecastType } from "../types"


const useForecast = () => {
    // const [locationPermission, setLocationPermission] = useState<boolean>(false) 

    const [searchInput, setSearchInput] = useState<string>('')
    const [location, setLocation] = useState<OptionType | null>(null)
    const [options, setOptions] = useState<[]>([])
    const [forecast, setForecast] = useState<ForecastType | null>(null)

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

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) : void => {
      const value = e.target.value.trim()
      setSearchInput(value)
      getSearchLocations(value)
    }

    const onOptionSelect = (option: OptionType) : void => {
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
        const forecastData = 
        {
            ...data.city,
            list: data.list.slice(0, 16)
        }
        console.info(forecastData)
        setForecast(forecastData)
      } catch (error) {
        console.error(error)
        return error
      }
    }

    return {
        searchInput,
        location,
        options,
        forecast,
        onInputChange,
        onOptionSelect,
        getForecast
    }
}

export default useForecast