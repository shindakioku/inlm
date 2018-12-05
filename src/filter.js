import mapToList from './mapToList'

export default (_, f) => mapToList(_).filter(f)
