
export const getTime = (timestamp: number): string => {
  const localTimezoneOffset: number = new Date().getTimezoneOffset() / 60
  const date = new Date(timestamp * 1000)
  const hours = (date.getHours() + localTimezoneOffset).toString()
  const minutes = date.getMinutes().toString()

  return `${hours.length <= 1 ? '0' : ''}${hours}:${minutes.length <= 1 ? '0' : ''}${minutes}`
}

export const getPressureDescription = (pressure: number): string => {
  let description = ''
  
  switch(true) {
    case (pressure < 950):
      description = 'Very low pressure'
      break
    case (pressure < 1000):
      description = 'Low pressure'
      break
    case (pressure > 1000 && pressure < 1013):
      description = 'Pressure is lower than usual'
      break
    case (pressure === 1013):
      description = 'Normal pressure'
      break
    case (pressure > 1013 && pressure < 1022): 
      description = 'Pressure is higher than usual'
      break
    case (pressure > 1022):
      description = 'High pressure'
      break
    default:
      description = 'Atmospheric pressure'
      break
  }
  return description
}

// Values and explanation according National Weather Service (using dew point)
export const getHumidityDescription = (humidity: number): string => {
  if (humidity <= 55) return 'Dry and comfortable'
  if (humidity > 55 && humidity <= 65) return 'A bit uncomfortable, sticky feeling'
  return 'Lots of moisture, uncomfortable air'
}

export const getVisibilityValueInKm = (value: number): number => {
  return Math.floor(value / 1000)
}

export const getVisibilityDescription = (value: number): string => {
  switch(true) {
    case (value <= 50):
      return 'Dangerously foggy'
    case (value > 50 && value <= 500):
      return 'Expect heavy fog'
    case (value > 500 && value <= 2000):
      return 'Expect some fog'
    case (value > 2000 && value <= 9000):
        return 'Expect some fog'
    default:
      return 'Very clear day'
  }
}

export const getWindSpeedInKm = (speed: number): string => {
  return (speed * 3.6).toFixed(1)
}

export const getWindDirection = (degrees: number): string => {
  const windDirections: string[] = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West']
  const index = Math.round(((degrees %= 360) < 0 ? degrees + 360 : degrees) / 45) % 8
  return windDirections[index]
}