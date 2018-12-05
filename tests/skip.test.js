import skip from '../src/skip'

test('Null, count is more length of data', () => {
  expect(skip([], 1)).toBe(null)
  expect(skip([], 0)).toBe(null)
  expect(skip([1, 2], 4)).toEqual([1, 2])
})

test('List', () => {
  expect(skip([1, 2, 3], 1)).toEqual([2, 3])
  expect(skip([1, 2, 3], 2)).toEqual([3])
  expect(skip([1, 2, 3], 3)).toEqual([1, 2, 3])
})

test('Map', () => {
  const a = { 0: 1, 1: 2, 2: 3 }

  expect(skip(a, 1)).toEqual([{ 1: 2 }, { 2: 3 }])
  expect(skip(a, 2)).toEqual([{ 2: 3 }])
  expect(skip(a, 3)).toEqual(a)
})
