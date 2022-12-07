const num = parseInt(process.argv[2])
if (Number.isNaN(num)) {
 throw new Error('数字ではありません! エラーを発生させてプログラムを終了します')
}
console.log('入力された数字は' + num + 'です。処理を続行..')