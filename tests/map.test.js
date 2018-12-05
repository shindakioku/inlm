import map from '../src/map'

test('List', () => {
  const a = map([1, 2, 3], _ => _ + 1)

  expect(a).toEqual([2, 3, 4])
})

test('Map', () => {
  const a = map(
    { 2: 3, 1: 2, 0: 1 },
    _ => +Object.keys(_)[0] + +Object.values(_)[0]
  )

  expect(a.reverse()).toEqual([5, 3, 1])
})
