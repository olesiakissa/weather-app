export type OptionType = {
    name?: string
    country?: string
    state?: string
    lat: number
    lon: number
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
    timezone: number
}

export type ForecastItemType = {
  dt: number
  main: {
      temp: number
      feels_like: number
      temp_min: number
      temp_max: number
      pressure: number
      sea_level?: number
      grnd_level?: number
      humidity: number
      temp_kf?:  number
    }
  weather: [
      {
          id?: number
          main: string
          description: string
          icon: string
      }
  ]
  clouds: {
      all: number
  }
  wind: {
      speed: number
      deg: number
      gust: number
  }
  visibility: number
  pop: number
  sys?: {
      pod?: string | null
  }
  dt_txt?: string
}