// 0. (準備) data.json を用意して、count: 0をセット
// 以下はプログラムの処理の流れ
// 1. 0 を読み込んで JSON -> JavaScript Object にパースする
// 2. 1 でエラーがでたら、不正な JSON フォーマットですと表示して終了
// 3. 1 でエラーがでなかったら、
    // 3-(1) count に 1を足す
    // 3-(2) オブジェクトに updateAt というプロパティを足して現在時刻を入力する
// 4. オブジェクトを、JSON に変換して、data.json として上書き保存

const fs = require('fs')
const json = fs.readFileSync('./kadai-06/data.json').toString()

let object
try {
    object = JSON.parse(json)
} catch (error) {
    console.log('不正な JSON フォーマットです')
    process.exit(1)
}

object.count = object.count + 1
object.updateAt = new Date().toISOString()
fs.writeFileSync(
    './kadai-06/data.json',
    JSON.stringify(object, null, 2)
)