let sum = 0
let index = 1
while (index <= 1000) {
    sum = sum + index
    index = index + 1
}
console.log(sum)

let sum2 = 0
let index2 = 1
while (index2 <=1000 ) {
    if(index2 % 3 === 1) {
        console.log(index2)
        sum2 = sum2 + index2
    }
    index2 = index2 + 1
}
console.log(sum2)

