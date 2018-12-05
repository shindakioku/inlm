import firstWhere from '../src/firstWhere'
import head from '../src/head'

test('List', () => {
  const a = [1]
  const b = ['q']
  const c = [1, 2, 3]

  expect(firstWhere(a, _ => 2 === _)).toBe(null)
  expect(firstWhere(a, _ => 1 === _)).toBe(1)

  expect(firstWhere(b, _ => 'ww' === _)).toBe(null)
  expect(firstWhere(b, _ => 'q' === _)).toBe('q')

  expect(firstWhere(c, _ => 2 === _)).toBe(2)
  expect(firstWhere(c, _ => 1 === _)).toBe(1)
  expect(firstWhere(c, _ => 0 === _)).toBe(null)

  expect(head(firstWhere([2, 4, 6, 8], _ => 0 == _ % 2))).toBe(2)
})

test('Map', () => {
  const a = { 0: 1 }
  const b = { q: 'a' }
  const c = { 0: 1, 1: 2, 2: 3 }

  expect(firstWhere(a, _ => 2 === +Object.keys(_)[0])).toBe(null)
  expect(firstWhere(a, _ => 0 === +Object.keys(_)[0])).toEqual({ 0: 1 })

  expect(firstWhere(b, _ => 'ww' === Object.keys(_)[0])).toBe(null)
  expect(firstWhere(b, _ => 'q' === Object.keys(_)[0])).toEqual({ q: 'a' })

  expect(firstWhere(c, _ => 2 === +Object.keys(_)[0])).toEqual({ 2: 3 })
  expect(firstWhere(c, _ => 1 === +Object.keys(_)[0])).toEqual({ 1: 2 })
  expect(firstWhere(c, _ => 4 === +Object.keys(_)[0])).toBe(null)

  expect(
    head(
      firstWhere({ 0: 2, 1: 4, 2: 6, 3: 8 }, _ => 0 == +Object.keys(_)[0] % 2)
    )
  ).toEqual({
    0: 2
  })
})
