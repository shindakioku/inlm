import last from '../src/last'

test('List', () => {
  expect(last([1, 2, 3])).toBe(3)
  expect(last([1, 2])).toBe(2)
  expect(last([1, 'q'])).toBe('q')
  expect(last([])).toBe(null)
})

test('Map', () => {
  expect(last({ 1: 1, 2: 2, 3: 3 })).toEqual({ 3: 3 })
  expect(last({ 1: 1, 2: 2 })).toEqual({ 2: 2 })
  expect(last({ 1: 1, q: 'q' })).toEqual({ q: 'q' })
  expect(last({})).toBe(null)
})
