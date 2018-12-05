import fold from '../src/fold'

test('List', () => {
  const a = fold([], [1, 2, 3], (list, _) => {
    list.push(_ + 1)

    return list
  })

  expect(a).toEqual([2, 3, 4])
})

test('Map', () => {
  const a = fold([], { 0: 1, 1: 2, 2: 3 }, (list, _, index) => {
    list.push({ [index]: Object.values(_)[0] })

    return list
  })

  expect(a).toEqual([{ '0': 1 }, { '1': 2 }, { '2': 3 }])
})
