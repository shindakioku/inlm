import map from './map'
import mapKeys from './mapKeys'
import isList from './isList'

const defaultF = (key, data) => ({ [key]: data[key] })

export default (_, f = defaultF) =>
  isList(_) ? _ : map(mapKeys(_), v => f(v, _))
