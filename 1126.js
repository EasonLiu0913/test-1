// 獲得元素介面物件生日下拉選單＊for迴圈
const year = document.getElementById('year')
const month = document.getElementById('month')
const date = document.getElementById('date')
const checkAge = document.getElementById('checkAge')
const message = document.getElementById('message')

// 年份從小到大1910~2010
let yearOptionString = '<option value="0">年份</option>'
for (let i = 1910; i < 2011; i++) {
  // 因為i是數字所以要接字串的時候要用＋連接 下面的方法有4個字串
  //   yearOptionString += '<option value="' + i + '">' + i + '</option>'
  // ＊下面範例樣板字串要用重音符號``包起來，帶入數字用${}帶入
  yearOptionString += `<option value="${i}">${i}</option>`
}
// 在HTML插入呈現結果
year.innerHTML = yearOptionString

// 月份從1月到12月
let monthOptionString = '<option value="0">月份</option>'
for (let i = 1; i < 13; i++) {
  monthOptionString += `<option value="${i}">${i}</option>`
}
// 在HTML插入呈現結果
month.innerHTML = monthOptionString

// 日期從1號到31號
let dateOptionString = '<option value="0">日期</option>'
for (let i = 1; i < 32; i++) {
  dateOptionString += `<option value="${i}">${i}</option>`
}
// 在HTML插入呈現結果
date.innerHTML = dateOptionString

//先把變數定義成數字，記錄目前使用者選擇的值(數字)
let birthY = 0
let birthM = 0
let birthD = 0

//改變事件
year.addEventListener('change', function () {
  //// 更新選擇的變數值
  birthY = +year.value

  // 當有使用者有選到了年和月時才作更新日期選項
  if (birthY && birthM) {
    // 得到該西元年、月應該要有幾天
    const days = new Date(birthY, birthM, 0).getDate()
    /////// 日期呈現
    let dateOptionString = '<option value="0">日期</option>'
    for (let i = 1; i < days + 1; i++) {
      dateOptionString += `<option value="${i}">${i}</option>`
    }

    // 將日期的選項值呈現
    date.innerHTML = dateOptionString
  }
})

month.addEventListener('change', function () {
  birthM = +month.value

  // 當有使用者有選到了年和月時才作更新日期選項
  if (birthY && birthM) {
    // 得到該西元年、月應該要有幾天
    const days = new Date(birthY, birthM, 0).getDate()
    // 日期從1號到31號
    let dateOptionString = '<option value="0">日期</option>'
    for (let i = 1; i < days + 1; i++) {
      dateOptionString += `<option value="${i}">${i}</option>`
    }
    // 在HTML插入呈現結果
    date.innerHTML = dateOptionString
  }
})

date.addEventListener('change', function () {
  birthD = +date.value
})

//檢查是否滿18歲
checkAge.addEventListener('click', function () {
  //要同時滿足年月日條件都填寫後才呈現
  if (birthY && birthM && birthD) {
    //這裡放檢查程式碼
    //獲取當下的年月日
    const now = new Date()
    //月份為0~11的值，10代表11月
    const d = now.getDate()
    const m = now.getMonth() + 1
    const y = now.getFullYear()
    // 布林值代表有沒有超過18歲，超過18歲為true
    let isOver18 = false
    if (y - birthY > 18) isOver18 = true
    if (y - birthY === 18 && m - birthM > 0) isOver18 = true
    if (y - birthY === 18 && m - birthM === 0 && d - birthD > 0) isOver18 = true
    message.innerHTML = isOver18 ? '滿18歲' : '未滿18歲'
  } else {
    alert('請選擇好出生年月日')
    message.innerHTML = ''
  }
})


