// 関数型、値としての関数
function hello() {
    console.log("こんにちは")
}
hello()
const func = hello
func()

const non_func = "あああああ"
non_func()