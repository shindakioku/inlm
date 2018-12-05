import head from './head'
import filter from './filter'

export default (_, f) => head(filter(_, f))
