const fs = require("fs")

const file = fs.readFileSync("./kadai-04/hello.txt")

fs.readFile("./kadai-04/hello.txt", (err, data) => {
    console.log("ファイル読みこみ完了", data)
})
console.log("readFile が呼ばれた")

