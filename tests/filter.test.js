import filter from '../src/filter'

test('List', () => {
  expect(filter([12, 5, 8, 130, 44], _ => _ >= 10)).toEqual([12, 130, 44])
})

test('Map', () => {
  const a = filter({ a: 'b', c: 'd' }, _ => 'a' === Object.keys(_)[0])

  expect(a).toEqual([{ a: 'b' }])
})
