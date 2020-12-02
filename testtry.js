const max = document.getElementById('max')
const min = document.getElementById('min')
const display = document.getElementById('display')
const num = document.getElementById('num')

let x = +max.value
let y = +min.value
let j=''

display.addEventListener('click', function randomNumber() {
    const j=Math.floor(Math.random() * (x - y + 1)) + y
})

num.innerHTML='隨機數字'＋j

//老資的解答
function randomNumber(y,x){
    return Math.floor(Math.random() * (x - y + 1)) + y
}

randomNumber(5,199)