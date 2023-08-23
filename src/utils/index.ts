export const getTime = (timestamp: number): string => {
  const localTimezoneOffset: number = new Date().getTimezoneOffset() / 60
  const date = new Date(timestamp * 1000)
  const hours = (date.getHours() + localTimezoneOffset).toString()
  const minutes = date.getMinutes().toString()

  return `${hours.length <= 1 ? '0' : ''}${hours}:${minutes.length <= 1 ? '0' : ''}${minutes}`
}
