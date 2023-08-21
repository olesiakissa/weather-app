import { ChangeEvent } from 'react'

export type OptionType = {
    name: string
    lat: number
    lon: number
}

export type SearchPropsType = {
    searchInput: string
    options: []
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onOptionSelect: (option: OptionType) => void
    getForecast: () => void
}

export type ForecastType = {
    name: string
    country: string
    list: [
      {
        dt: number
        main: {
          feels_like: number
          humidity: number
          pressure: number
          temp: number
          temp_max: number
          temp_min: number
        }
        weather: [
          {
            main: string
            icon: string
            description: string
          }
        ]
        wind: {
          speed: number
          gust: number
          deg: number
        }
        clouds: {
          all: number
        }
        pop: number
        visibility: number
      }
    ]
    sunrise: number
    sunset: number
}