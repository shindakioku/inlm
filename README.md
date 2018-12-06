# inlm

Some methods for working with [] (List) | {} (Map)

---
`type Data = Map<K, V> | List<T>`

#### filter

`filter(Data _, Boolean (Map<K, V> | T value, Integer index, List<T>)) -> List<T> || List<Map<K, V>>`

```js
// [12, 130, 44]
filter([12, 5, 8, 130, 44], _ => _ >= 10)

// [{ a: 'b' }]
const a = filter({ a: 'b', c: 'd' }, _ => 'a' === Object.keys(_)[0])
```

---
#### firstWhere

`firstWhere(Data, Map<K,V> | T value, Integer index, List<T>) -> Null | List<...> | T, Map<K, V>`

```js
// 1
firstWhere([1, 2, 3], _ => 1 === _)

// 2
head(firstWhere([2, 4, 6, 8], _ => 0 == _ % 2))

// { 1: 2 }
firstWhere({ 0: 1, 1: 2, 2: 3 }, _ => 1 === +Object.keys(_)[0])

// { 0: 2 }
head(firstWhere({ 0: 2, 1: 4, 2: 6, 3: 8 }, _ => 0 == +Object.keys(_)[0] % 2))
```

---
#### fold

`fold(E default, Data _, (E, T, Integer index, List<...> foldArray)) -> S`

```js
// [2, 3, 4]
 const a = fold([], [1, 2, 3], (list, _) => {
    list.push(_ + 1)

    return list
})

// [{ '0': 1 }, { '1': 2 }, { '2': 3 }]
const a = fold([], { 0: 1, 1: 2, 2: 3 }, (list, _, index) => {
    list.push({ [index]: Object.values(_)[0] })

    return list
})
```

------
#### head

`head(Data _) -> Null | Map<K, V> | T | List<T> | List<Map<K, V>>`

```js
// null
take([], 1)

// [1, 2]
take([1, 2], 4)

// [1, 2]
take([1, 2, 3], 2)

// [{ 0: 1 }, { 1: 2 }]
take({ 0: 1, 1: 2, 2: 3 }, 2)
```

----------
#### isList

`isList(Data _) -> Boolean`

----------
#### last

`last(Data _) -> Null | T | Map<K, V>`

```js
// null
last([])

// 3
last([1, 2, 3])

// { q: 'q' }
last({ 1: 1, q: 'q' })
```

-----
#### map

`map(Data _, E f(T | Map<K, V> value)) -> List<E>`

```js
// [2, 3, 4]
map([1, 2, 3], _ => _ + 1)

// [1, 3, 5]
map({ 2: 3, 1: 2, 0: 1 }, _ => +Object.keys(_)[0] + +Object.values(_)[0])
```

-----
#### mapKeys

`mapKeys(Map<K, V> value) -> List<String>`

------
#### mapLength

`mapLength(Map<K, V> value) -> Integer`

---------
#### mapToList

`mapToList(Data _, E f(K key, Data data)) -> List<E>`

```js
// [{ user1: 1 }, { user2: 2 }]
mapToList({ user1: 1, user2: 2 })

// [{ user1: 'user1' }, { user2: 'user2' }]
mapToList({ user1: 1, user2: 2 }, (key, data) => ({
    [key]: key
}))
```

---------
#### reduce

`reduce(Data _, (E, T, Integer index, List<...> foldArray)) -> S`

```js
// 6
reduce([1, 2, 3], (list, _) => list + _)

// 6
let first = true

const a = reduce({ 0: 1, 1: 2, 2: 3 }, (list, _, index) => {
    if (first) {
        first = false

          return +Object.values(list)[0] + +Object.values(_)[0]
    } else {
         return list + +Object.values(_)[0]
    }
})
```

-----------------
#### skip

`skip(Data _, Integer count) -> Null | Data | List<T> | List<Map<K, V>>`

```js
// null
skip([], 1)

// [1, 2]
skip([1, 2], 4)

// [3]
skip([1, 2, 3], 2)

// [{ 1: 2 }, { 2: 3 }]
skip({ 0: 1, 1: 2, 2: 3 }, 1)
```

-------------
#### tail

`tail(Data _) -> Null | Map<K, V> | T`
