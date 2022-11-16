// setTimeout や setInterval をキャンセルする

let count = 0
const timerId = setInterval(() => {
    count = count + 1
    console.log("hello")
    if(count > 20) {
        clearInterval(timerId)
    }
}, 100)

