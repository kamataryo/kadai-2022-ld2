const birds = ["スズメ", "ドバト", "ツバメ", "カモメ"]

birds.forEach((bird) => {
    const isEndsWithメ = bird.endsWith("メ")
    console.log(bird, "メで終わる？", isEndsWithメ)
})

for (const bird of birds) {
    const isEndsWithメ = bird.endsWith("メ")
    console.log(bird, "メで終わる？", isEndsWithメ)    
}

// map メソッド
const reuslt = birds.map((bird) => {
    const isEndsWithメ = bird.endsWith("メ")
    return {
        name: bird,
        "メで終わる？": isEndsWithメ,
    }
})
console.log(birds)
console.log(reuslt)