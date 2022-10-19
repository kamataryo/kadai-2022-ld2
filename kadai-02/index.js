// • 変数 firstName と familyName を作成して自分の名前などを代入してみる
const firstName = "ryo"
const familyName = "kamata"

// • 文字列を結合する演算子を使って、フルネームを作成してを使って出力してみる
const fullName = firstName + familyName
console.log(fullName)

// • 1から10までの和を計算して出力してみる
const num = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
console.log(num)

// • 犬を飼っているかどうかの真偽値を格納する変数 dog と、猫を飼っているかどう
// かの真偽値を格納する変数 cat を作成して値を格納する
const dog = false
const cat = true

// • 「犬または猫を飼っている」場合の真偽値を計算して出力してみる
// => ヒント: OR 演算子(||) を利用する
console.log("犬または猫を飼っている", dog || cat)

// • 「犬と猫の両方を飼っている」場合の真偽値を計算して出力してみる
// => ヒント: AND 演算子(&&) を利用する
console.log("犬と猫の両方を飼っている", dog && cat)

// • 「犬も猫も飼っていない」場合の真偽値を計算して出力してみる
// => ヒント: 否定演算子(!)と、AND 演算子または OR 演算子を利用する
console.log("犬も猫も飼っていない(「犬を飼っていない」かつ「猫を飼っていない」)", !dog && !cat)
console.log("犬も猫も飼っていない(「犬または猫をかっている、わけではない」)", !(dog || cat))
