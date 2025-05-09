let str1 = "Hola"
let str2 = "Mundo"

const uno = () => {
    let strA = `${str1} ${str2}`
    console.log(strA)
    let strB = str1 + str2
    console.log(strB)
}

uno()

module.exports = uno;