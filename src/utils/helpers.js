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
    6: 92,
    7: 92,
  }

  return sizes[type]
}
