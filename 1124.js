// 獲得元素介面物件
const total = document.getElementById('total')
const add = document.getElementById('add')
const sub = document.getElementById('sub')
// 加掛事件監聽器（類型，要做什麼甚麽的函式）
// .innerHTML是要抓到id的值
// html到js都會變字串，如要轉數字要在前面加上＋宣告他是數字
total.addEventListener('click', function (event) {
  //   事件指向
  console.log(event.target)
  // this:誰呼叫了這個函式
  console.log(this)
  console.log(total)

  total.innerHTML = +total.innerHTML + 1
})
add.addEventListener('click', function () {
  total.innerHTML = +total.innerHTML + 1
})
sub.addEventListener('click', function () {
  total.innerHTML = +total.innerHTML - 1
})

const text = document.getElementById('text')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const color3 = document.getElementById('color3')
const apply = document.getElementById('apply')


apply.addEventListener('click', function () {
  // 定義16進位顏色＝（＋把字串變成數字再轉到16進位的字串）
  let hexcolor1 = (+color1.value).toString(16)
  if (hexcolor1.length < 2) hexcolor1 = '0' + hexcolor1

  let hexcolor2 = (+color2.value).toString(16)
  if (hexcolor2.length < 2) hexcolor2 = '0' + hexcolor2

  let hexcolor3 = (+color3.value).toString(16)
  if (hexcolor3.length < 2) hexcolor3 = '0' + hexcolor3

  //   字串連接成色碼
  text.style.color = '#' + hexcolor1 + hexcolor2 + hexcolor3
})

// console.log(typeof c);
// console.log(Array.isArray(c));
