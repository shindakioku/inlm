import fold from './fold'

export default (_, f) =>
  fold([], _, (list, _) => {
    list.push(f(_))

    return list
  })
