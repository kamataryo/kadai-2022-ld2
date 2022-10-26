// 条件分岐のサンプル

// const score = 90
// if (score > 80) {
//   console.log("成績は優です")
// } else if (score > 60) {
//   console.log("成績は可です")
// } else {
//   console.log("成績は不可です")
// }


// for (
//   let characters = '';
//   characters !== 'aaaaaaaaaa' ;
//   characters = characters + 'a'
// ) {
//   console.log(characters)
// }

// for (let index = 1; index < 101; index = index + 1) {
//   if(index === 51) {
//     continue
//   }
//   console.log(index)
// }

let count1 = 100
while (count1 < 100) {
  console.log("こんにちは1", count1)
  count1 = count1 + 1
}
console.log('カウント1', count1)

let count2 = 100
do {
  console.log('こんにちは2', count2)
  count2 = count2 + 1
} while (count2 < 100);
console.log('カウント2', count2)
