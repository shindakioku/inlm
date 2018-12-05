import mapToList from './mapToList'

export default (defaultValue, _, f) => mapToList(_).reduce(f, defaultValue)
