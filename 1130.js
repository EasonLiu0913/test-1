//淺拷貝物件內容
const o = { a: 1, b: 2 }
const m = Object.assign({}, o)
//assign o的值到花括號{}，assign(target{},source o)//
//m會拷貝一個新的物件

//es10淺拷貝
const n = { ...o }

//物件工廠模式
function createStudentObj(name, tel) {
  return { name: name, tel: tel }
}
const eddy = createStudentObj('張曉噯', '0911111111')



//建構式物件
class Student {
  constructor(name, tel) {
    this.name = name
    this.tel = tel
  }
}
const eddy2 = new Student('張曉噯', '0911111111')
//物件工廠模式跟建構式結果相似但又不太一樣，
//物件工廠指向物件，建構式會先透過類別class再到物件

//有名稱的函式
function sumA(a, b) {
  return a + b
}
//sum(1,2)>3
//sum(1,undefined)>NaN *如沒給值預設值會是undefined

//函式表達式
const sumB = function (a, b) {
  return a + b
}

//肥箭頭表達（因很簡短較有人氣）
const sumC = (a, b) => a + b

//內部巢狀函式
function sumd(z) {
  return function (x, y) {
    return x + y + z
  }
}

const sumXY = sumd(1) //z的值呼叫後鎖定指定為1
sumd(5, 5) //呼叫function(x,y)>x=5,y=5
//>5+5+1>11

//練習題一：學生資料表以表格呈現
const data = document.getElementById('data')
const searchWord = document.getElementById('searchWord')
const search = document.getElementById('search')
const sortAscMath = document.getElementById('sortAscMath')
const sortDescMath = document.getElementById('sortDescMath')
const sortAscChinese = document.getElementById('sortAscChinese')
const sortDescChinese = document.getElementById('sortDescChinese')

const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85`
// 先以分行符號來取得多行陣列值，\n是斷行的意思
const rawDataArray = rawData.split('\n')
console.log(rawDataArray)

111

// 取代多餘的("")，然後分依逗號分取陣列值
//replace or replaceAll(原來的,取代成)
const titleArray = rawDataArray[0].replaceAll('"', '').split(',')
console.log(titleArray)

// 標題的呈現部份
let titleDisplay = ''
for (let i = 0; i < titleArray.length; i++) {
  titleDisplay += `<th>${titleArray[i]}</th>`
}

titleDisplay = `<thead><tr>${titleDisplay}</tr></thead>`

//標題超精簡寫法
// data.innerHTML = `<thead><tr>${rawDataArray[0]
//     .replaceAll('"', '')
//     .split(',')
//     .map((v) => `<th>${v}</th>`)
//     .join('')}</tr></thead>`

//學生資料內容呈現部分

let studentArray = []
// 從每個陣列取得內部的陣列值
for (let i = 1; i < rawDataArray.length; i++) {
  const bodyArray = rawDataArray[i].replaceAll('"', '').split(',')
  console.log(bodyArray)
  //建立學生物件
  const student = {
    name: bodyArray[0],
    chinese: +bodyArray[1],
    math: +bodyArray[2],
    english: +bodyArray[3],
  }
  studentArray.push(student)
  console.log(studentArray)
}

//   bodyDisplay += '<tr>'
//   for (let j = 0; j < bodyArray.length; j++) {
//     bodyDisplay += `<td>${bodyArray[j]}</td>`
//   }
//   bodyDisplay += '</tr>'
//

// 專門用於呈現學生資料的函式
function displayStudentData(studentArray) {
  let bodyDisplay = ''
  let chineseTotal = 0
  let mathTotal = 0
  let englishTotal = 0

  for (let i = 0; i < studentArray.length; i++) {
    bodyDisplay += '<tr>'
    bodyDisplay += `<td>${studentArray[i].name}</td>`
    bodyDisplay += `<td>${studentArray[i].chinese}</td>`
    bodyDisplay += `<td>${studentArray[i].math}</td>`
    bodyDisplay += `<td>${studentArray[i].english}</td>`
    bodyDisplay += '</tr>'

    //算學生成績總和

    chineseTotal += studentArray[i].chinese
    mathTotal += studentArray[i].math
    englishTotal += studentArray[i].english
  }

  //呈現總平均
  bodyDisplay += `<tr>
<td>總平均</td>
<td>${(chineseTotal / studentArray.length).toFixed(0)}</td>
<td>${(mathTotal / studentArray.length).toFixed(0)}</td>
<td>${(englishTotal / studentArray.length).toFixed(0)}</td>
</tr>`

  return bodyDisplay
}

// 專門用於依各科成績來排序學生資料的函式
//direction asc:由小到大 desc:由大到小
function sortStudentData(studentArray, field, direction = 'asc') {
  const newStudentArray = [...studentArray]
  if (direction === 'asc')
    newStudentArray.sort(function (a, b) {
      // 由小到大排序
      return a[field] - b[field]
    })
  else
    newStudentArray.sort(function (a, b) {
      // 由大到小排序
      return b[field] - a[field]
    })

  return newStudentArray
}

//標題超精簡寫法
// bodyDisplay += `<tr>${rawDataArray[i]
//     .replaceAll('"', '')
//     .split(',')
//     .map((v) => `<td>${v}</td>`)
//     .join('')}</tr>`
// }
// 第一次 - 呈現在網頁的table標記裡
data.innerHTML =
  titleDisplay + `<tbody>${displayStudentData(studentArray)}</tbody>`

search.addEventListener('click', function () {
  // 得到查詢字串是什麼
  //const nameSearchWord = searchWord.value

  // 過濾只需要姓名包含查詢字串
  const newStudentArray = studentArray.filter(function (value) {
    return value.name.includes(searchWord.value)
  })

  data.innerHTML =
    titleDisplay + `<tbody>${displayStudentData(newStudentArray)}</tbody>`
})

sortAscMath.addEventListener('click', function () {
  const newStudentArray = sortStudentData(studentArray, 'math', 'asc')
  data.innerHTML =
    titleDisplay + `<tbody>${displayStudentData(newStudentArray)}</tbody>`
})

sortDescMath.addEventListener('click', function () {
  const newStudentArray = sortStudentData(studentArray, 'math', 'desc')
  data.innerHTML =
    titleDisplay + `<tbody>${displayStudentData(newStudentArray)}</tbody>`
})

sortAscChinese.addEventListener('click', function () {
  const newStudentArray = sortStudentData(studentArray, 'chinese', 'asc')
  data.innerHTML =
    titleDisplay + `<tbody>${displayStudentData(newStudentArray)}</tbody>`
})

sortDescChinese.addEventListener('click', function () {
  const newStudentArray = sortStudentData(studentArray, 'chinese', 'desc')
  data.innerHTML =
    titleDisplay + `<tbody>${displayStudentData(newStudentArray)}</tbody>`
})
