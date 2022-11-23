// オブジェクトのプロパティのよみこみ

const obj = {
    myKey: 456,
    "my-key": 123,
    hello123: "world",
    "123hello": "world",
    'm&m': 'chocolate',
}

console.log(obj.myKey)
console.log(obj["myKey"])

// console.log(obj.my-key) エラー
console.log(obj["my-key"])

console.log(obj.hello123)
console.log(obj["hello123"])

// console.log(obj.123hello) エラー
console.log(obj["123hello"])

// キーを動的に指定する
let key = "123hello"
console.log(obj[key])
key = "my-key"
console.log(obj[key])

// const obj = {
//     myKey: 456,
//     "my-key": 123,
//     hello123: "world",
//     "123hello": "world",
//     'm&m': 'chocolate',
// }

const hello123 = "myKey"
console.log(obj.hello123)
console.log(obj[hello123])

console.log(obj.xyz.abc)
