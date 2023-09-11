/**
 * Required parameters to append:
 * - q = {city name},{state code},{country code}
 * - appid = unique API key
 * 
 * Optional: 
 * - limit={limit}
 */
export const API_CALL_SEARCH : string = 'http://api.openweathermap.org/geo/1.0/direct?q='

/**
 * Required parameters to append:
 * - Latitude: lat={lat}
 * - Longitude: lon={lon}
 * - API KEY: appid={API key}
 * 
 * Optional: 
 * - Response format (json by default) : mode={xml | html} 
 * - Units of measurement: units={standard | metric | imperial}
 */
export const API_CALL_LOCATION : string = 'https://api.openweathermap.org/data/2.5/forecast?'

/**
 * A number for a dropdown list of location options
 */
export const API_CALL_LIMIT : number = 5

export const API_UNITS : string = 'metric'

export const WARNING_MSG : string = `This functionality is currently disabled. \n
Please, allow the application to access location in order to see local weather.`