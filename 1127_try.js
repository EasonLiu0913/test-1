const title = document.getElementById('title')
const calendar = document.getElementById('calendar')
const name = document.getElementById('name')

//呈現星期幾的標題

const calHeaders = ['日', '一', '二', '三', '四', '五', '六']

let tableHeader = ''

for (let i = 0; i < calHeaders.length; i++) {
  tableHeader += `<th>${calHeaders[i]}</th>`
}

calendar.innerHTML = `<thead><tr>${tableHeader}</tr></thead>`

//計算這個月幾天

const now = new Date()
const month = 11
const year = 2020

title.innerHTML = `${year}/${month + 1}`

//算10月有幾天
const days = new Date(year, month + 1, 0).getDate()
//算10月的第一天
const firstDay = new Date(year, month, 1).getDay()

const daysDataArray = []
//補前面的空位
for (let j = 0; j < firstDay; j++) {
  daysDataArray.push('*')
}
//補日期
for (let i = 1; i < days; i++) {
  daysDataArray.push(i)
}

console.log(daysDataArray)

// 準備呈現在網頁上
let dataDisplay = ''

for (let i = 0; i < daysDataArray.length; i++) {
  dataDisplay += `<td>${daysDataArray[i]}</td>`

  //每七個要換行
  if ((i + 1) % 7 === 0) {
    dataDisplay += `<tr></tr>`
  }
}

calendar.innerHTML = tableHeader + `<tobody><tr>${dataDisplay}</tr></tobody>`
