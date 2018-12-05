import reduce from '../src/reduce'

test('List', () => {
  const a = reduce([1, 2, 3], (list, _) => list + _)

  expect(a).toBe(6)
})

test('Map', () => {
  let first = true

  const a = reduce({ 0: 1, 1: 2, 2: 3 }, (list, _, index) => {
    if (first) {
      first = false

      return +Object.values(list)[0] + +Object.values(_)[0]
    } else {
      return list + +Object.values(_)[0]
    }
  })

  expect(a).toBe(6)
})
