const set = new Set([1, 2, 3]);
console.log(set.size);

for (let i = 0; i < set.size; i++) {
  console.log(set[i]);
}

for (const item of set) {
  console.log(item);
}
