export function useRegex() {
  const dateRegex = /\d{4}\/\d{1,2}\/\d{1,2}/
  const timeRegex = /\d{1,2}:\d{1,2}/
  const datetimeRegex = /^\d{4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{1,2}$/
  const numberRegex = /^\d+$/
  return {
    dateRegex,
    timeRegex,
    datetimeRegex,
    numberRegex,
  }
}