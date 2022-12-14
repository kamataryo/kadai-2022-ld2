// 次のデータ構造を実現するクラスを作成してください
// • Animal という名前のクラス
// • energy というプロパティを持つ。初期値は数字の 100
// • eat というメソッドを持ち、コールすることで energy が 10 増える
// • Animal クラスを継承する Cat という名前のクラス
// • speak というメソッドを持ち、コールするとコンソールに "meow" と表示する
// • 作成した Cat クラスをインスタンス化し、 speak メソッド、 eat メソッドを実行してみる
// • また energy プロパティにアクセスし、現在の値をコンソールに表示する

class Animal {
    constructor() {
        this.energy = 100
    }
    eat() {
        this.energy = this.energy + 10
    }
}

class Cat extends Animal {
    speak() {
        console.log("meow")
    }
}
const cat = new Cat()
cat.speak()
console.log(cat.energy)
cat.eat()
cat.eat()
cat.eat()
cat.eat()
console.log(cat.energy)
