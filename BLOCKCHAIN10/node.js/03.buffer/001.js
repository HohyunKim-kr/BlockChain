const buffer = Buffer.from("쟈얄");

console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

const arr = [Buffer.from("Hello"), Buffer.from("World")];
console.log(arr);

const concat = Buffer.concat(arr);
console.log(concat);
console.log(concat.toString());

const alloc = Buffer.alloc(5);
console.log(alloc);

/*
이미지 1gb

5Mb
*/
