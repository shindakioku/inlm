import mapToList from '../src/mapToList'

test('With library func', () => {
  const a = mapToList({ user1: 1, user2: 2 })

  expect(a).toEqual([{ user1: 1 }, { user2: 2 }])
})

test('With custom function', () => {
  const a = mapToList({ user1: 1, user2: 2 }, (key, data) => ({
    [key]: key
  }))

  expect(a).toEqual([{ user1: 'user1' }, { user2: 'user2' }])
})
