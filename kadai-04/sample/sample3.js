
function hello1(name) {
    console.log("こんにちは、" + name + "さん")
}
const hello2 = function(name) {
    console.log("こんにちは、" + name + "さん")
}

const hello3 = (name) => {
    console.log("こんにちは、" + name + "さん")
}

hello1("佐藤")
hello2("佐藤")
hello3("佐藤")