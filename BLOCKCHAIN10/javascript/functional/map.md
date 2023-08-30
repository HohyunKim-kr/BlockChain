# Map 함수 만들기

```js
const products = [
  { name: "kim", age: 10 },
  { name: "park", age: 30 },
  { name: "lee", age: 20 },
  { name: "ooh", age: 55 },
  { name: "jeoung", age: 78 },
];

const names = [];
for( const a products) {
    names.push(a.name);
}
console.log(names)
```

```js
const map = (callback, arr) => {
  const result = [];
  for (const a of arr) {
    retult.push(callback(a));
  }
  return result;
};
```
