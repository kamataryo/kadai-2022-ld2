// 例外処理

console.log("Hello!")
try {
    JSON.parse('{ "こんにちは": "世界" ')
} catch (error) {
    console.log("[ERROR] エラーが発生しました。無視して処理を継続します。")
}
console.log("Bye!")