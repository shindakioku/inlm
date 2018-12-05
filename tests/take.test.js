import take from '../src/take'

test('Null, count is more length of data', () => {
  expect(take([], 1)).toBe(null)
  expect(take([], 0)).toBe(null)
  expect(take([1, 2], 4)).toEqual([1, 2])
})

test('List', () => {
  expect(take([1, 2, 3], 1)).toEqual([1])
  expect(take([1, 2, 3], 2)).toEqual([1, 2])
  expect(take([1, 2, 3], 3)).toEqual([1, 2, 3])
})

test('Map', () => {
  const a = { 0: 1, 1: 2, 2: 3 }

  expect(take(a, 1)).toEqual([{ 0: 1 }])
  expect(take(a, 2)).toEqual([{ 0: 1 }, { 1: 2 }])
  expect(take(a, 3)).toEqual(a)
})
