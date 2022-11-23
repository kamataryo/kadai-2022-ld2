// 配列が持っている便利なプロパティ
const array = [1,2,3,4,5]
console.log(array.length)

for (
    let index = 0;
    index < array.length /* 5 と同じ */;
    index = index + 1
) {
    const element = array[index];
}