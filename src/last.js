import mapToList from './mapToList'
import isList from './isList'
import mapLength from './mapLength'

export default _ => {
  const length = isList(_) ? _.length : mapLength(_)

  if (0 === length) return null

  return mapToList(_)[length - 1]
}
