// setTimeout 関数を使って次の処理を実装する
// 3秒後に Hello! と表示し、その2秒後に Bye と表示する

setTimeout(() => {
    console.log("Hello!")
    setTimeout(() => {
        console.log("Bye")
    }, 2000)
}, 3000)
