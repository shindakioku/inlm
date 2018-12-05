import isList from './isList'
import mapLength from './mapLength'
import filter from './filter'

export default (_, count) => {
  const length = isList(_) ? _.length : mapLength(_)

  if (0 === count || 0 === length) return null

  if (1 >= length) return _[0]

  if (count >= length) return _

  return filter(_, (_, i) => i + 1 <= count)
}
