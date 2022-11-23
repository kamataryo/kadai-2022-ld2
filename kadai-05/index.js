// profile という名前のオブジェクトを作成し、name、 age、 hobby、major というプロパティを作成する。値は好きに入れる
const profile = {
    name: "鎌田",
    age: 37,
    hobby: "登山",
    major: "地理学",
    pet: "猫"
}
// dictionary という名前のオブジェクトを作成し、name、 age、 hobby、major を日本語に翻訳する辞書を作成する。英単語をキーに、対応する翻訳を値として格納する
const dictionary = {
    name: "名前",
    age: "年齢",
    hobby: "趣味",
    major: "専攻",
    pet: "ペット"
}
// ループを使って profile オブジェクトのすべてのプロパティを以下のように表示する。 dictionary オブジェクトを活用する。

const keys = Object.keys(profile)

for (const key of keys) {
    const subject = dictionary[key]
    const value = profile[key]
    console.log("私の" + subject + "は" + value + "です")
}