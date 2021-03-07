export const tableColumns = [
  'No:',
  'Launched (UTC)',
  'Location',
  'Mission',
  'Orbit',
  'Launched Status',
  'Rocket',
]

export function getColumnWidth(type) {
  const sizes = {
    1: 32,
    2: 144,
    3: 120,
    4: 120,
    5: 50,
    6: 98,
    7: 92,
  }

  return sizes[type]
}

export function getLaunchStatus(success) {
  let launchStatus = 'Upcoming'

  if (success) {
    launchStatus = 'Success'
  } else if (success === false) {
    launchStatus = 'Failed'
  }

  return launchStatus
}

export function getDate(dateStr) {
  const date = new Date(dateStr)

  const datePart = date
    .toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .split(',')[1]

  const timePart = date.toLocaleTimeString().slice(0, -3)

  return `${datePart} at ${timePart}`
}
