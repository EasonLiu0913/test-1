//剪刀石頭布

// 呈現的文字
const user = document.getElementById('user')
const computer = document.getElementById('computer')
const result = document.getElementById('result')
//使用者要出什麼拳的按鈕
const scissors = document.getElementById('scissors')
const paper = document.getElementById('paper')
const rock = document.getElementById('rock')

//數字代表的拳的文字
const textArray = ['剪刀', '石頭', '布']
let userNumber = 0

//剪刀＝1,石頭=2,布＝3
scissors.addEventListener('click', function () {
  //電腦要出的拳,隨機1~3的數字
  const computerNumber = Math.floor(Math.random() * 3) + 1
  userNumber = 1

  //呈現文字
  user.innerHTML = '你出了' + textArray[userNumber - 1]
  computer.innerHTML = '電腦出' + textArray[computerNumber - 1]
  //判斷勝負與呈現勝負資訊（以使用者為基礎）
  // 相同值時是平手
  if (computerNumber === userNumber) {
    result.innerHTML = '平手'
  }
  if (userNumber > computerNumber && userNumber - computerNumber === 1) {
    result.innerHTML = 'you win!'
  }
  if (computerNumber > userNumber && computerNumber - userNumber === 1) {
    result.innerHTML = 'you 魯蛇!'
  }
  //假設user出3(布)>computer 1（剪刀）還是輸了
  if (userNumber > computerNumber && userNumber - computerNumber === 2) {
    result.innerHTML = 'you 魯蛇!'
  }
  //假設computer出3(布)>user 1（剪刀）就贏了
  if (computerNumber > userNumber && computerNumber - userNumber === 2) {
    result.innerHTML = 'you win!'
  }
})
rock.addEventListener('click', function () {
  //電腦要出的拳,隨機1~3的數字
  const computerNumber = Math.floor(Math.random() * 3) + 1
  userNumber = 2

  //呈現文字
  user.innerHTML = '你出了' + textArray[userNumber - 1]
  computer.innerHTML = '電腦出' + textArray[computerNumber - 1]
  //呈現文字
  user.innerHTML = '你出了' + textArray[userNumber - 1]
  computer.innerHTML = '電腦出' + textArray[computerNumber - 1]
  //判斷勝負與呈現勝負資訊（以使用者為基礎）
  // 相同值時是平手
  if (computerNumber === userNumber) {
    result.innerHTML = '平手'
  }
  if (userNumber > computerNumber && userNumber - computerNumber === 1) {
    result.innerHTML = 'you win!'
  }
  if (computerNumber > userNumber && computerNumber - userNumber === 1) {
    result.innerHTML = 'you 魯蛇!'
  }
  //假設user出3(布)>computer 1（剪刀）還是輸了
  if (userNumber > computerNumber && userNumber - computerNumber === 2) {
    result.innerHTML = 'you 魯蛇!'
  }
  //假設computer出3(布)>user 1（剪刀）就贏了
  if (computerNumber > userNumber && computerNumber - userNumber === 2) {
    result.innerHTML = 'you win!'
  }
})

paper.addEventListener('click', function () {
  //電腦要出的拳,隨機1~3的數字
  const computerNumber = Math.floor(Math.random() * 3) + 1
  userNumber = 3

  //呈現文字(用索引值查陣列對照)
  user.innerHTML = '你出了' + textArray[userNumber - 1]
  computer.innerHTML = '電腦出' + textArray[computerNumber - 1]
  //呈現文字
  user.innerHTML = '你出了' + textArray[userNumber - 1]
  computer.innerHTML = '電腦出' + textArray[computerNumber - 1]
  //判斷勝負與呈現勝負資訊（以使用者為基礎）
  // 相同值時是平手
  //簡化程式
  // (以使用者為基礎相減值) (user - com)
  const subNumber = userNumber - computerNumber

  if (computerNumber === userNumber) {
    result.innerHTML = '平手'
  }
  if (subNumber === 1 || subNumber === -2) {
    result.innerHTML = 'you win!'
  }
  if (subNumber === -1 || subNumber === 2) {
    result.innerHTML = 'you 魯蛇!'
  }
})

//萬年曆
const calendar = document.getElementById('calendar')
const title = document.getElementById('title')

//呈現星期幾的標頭
const calHeaders = ['日', '一', '二', '三', '四', '五', '六']

let tableHeader = ''
for (let i = 0; i < calHeaders.length; i++) {
  tableHeader += `<th>${calHeaders[i]}</th>`
}
calendar.innerHTML = `<thead><tr>${tableHeader}</tr></thead>`

//計算這個月有幾天
const now = new Date()
// const month = now.getMonth() //0~11月
// const year = now.getFullYear()

const month = 9
const year = 2020

title.innerHTML = `${year} / ${month + 1}`

//month=11相當於11月
//month帶9的話9+1=10，10代表11月，11月的第0天，也就是10月有幾天
const days = new Date(year, month + 1, 0).getDate()
// month = 9 相當於 10月的第一天是星期幾(0-6)
//month帶9的話就是代表10月，10月的第一天是禮拜幾？
const firstDay = new Date(year, month, 1).getDay()

const daysDataArray = []
// 補前面的空位
for (let j = 0; j < firstDay; j++) {
  daysDataArray.push('')
}
// 由1開始到這個月最後一天的日期填入資料陣列
for (let i = 1; i < days + 1; i++) {
  daysDataArray.push(i)
}

console.log('行事曆資料陣列', daysDataArray)

// 準備呈現在網頁上
let dataDisplay = '<tr>'

for (let i = 0; i < daysDataArray.length; i++) {
  dataDisplay += `<td>${daysDataArray[i]}</td>`

  // 每7個後面要加入一個換下一列的標記
  if ((i + 1) % 7 === 0) {
    dataDisplay += '</tr><tr>'
  }
}

dataDisplay += '</tr>'

//console.log(dataDisplay)

// 呈現在網頁上
calendar.innerHTML = dataDisplay
