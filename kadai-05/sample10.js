// オブジェクトが作る参照

const a = {
    x: 1,
    y: 2,
}
const b = a
console.log("a:", a)
console.log("b:", b)
b.x = 10
console.log("b:", b)
console.log("a:", a)

// 文字列型は参照をつくらない（プリミティブ型）

let name1 = "たま"
console.log(name1)
let name2 = name1
console.log(name2)
name2 = "ぽち"
console.log(name2)
console.log(name1)

// 配列は参照を作る
const arr1 = ["たま", "ぽち", "みけ"]
console.log(1, arr1)
const arr2 = arr1
console.log(2, arr2)
arr2[1] = "Pochi"
console.log(2, "変更後", arr2)
console.log(1, "変更後", arr1)

// 関数型の参照
const func1 = () => { console.log("Hello") }
func1()
const func2 = func1
func2()
func2.test = "テスト"
console.log(func2.test)
console.log(func1.test)