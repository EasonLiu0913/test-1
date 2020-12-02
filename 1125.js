// 獲得元素介面物件美金兌換
const money = document.getElementById('money')
const usd2twd = document.getElementById('usd2twd')
const twd2usd = document.getElementById('twd2usd')
const moneyDisplay = document.getElementById('moneyDisplay')

// 1美金＝28.53台幣
usd2twd.addEventListener('click', function () {
  moneyDisplay.innerHTML = '美金轉台幣：' + (+money.value * 28.53).toFixed(0)
})

twd2usd.addEventListener('click', function () {
  moneyDisplay.innerHTML = '台幣轉美金：' + (+money.value / 28.53).toFixed(2)
})

// 獲得元素介面物件BMI值計算
const cm = document.getElementById('cm')
const kg = document.getElementById('kg')
const bmi = document.getElementById('bmi')
const bmiDisplay = document.getElementById('bmiDisplay')

bmi.addEventListener('click', function () {
  // 先得到身高與體重數字值
  const h = +cm.value
  const w = +kg.value
  // BMI = 體重(公斤) / 身高2(公尺平方)
  const bmiresult = w / Math.pow(h / 100, 2)

  // 輸出時只保留一位小數點
  bmiDisplay.innerHTML = bmiresult.toFixed(1)
})

// 獲得元素介面物件會員註冊
const name = document.getElementById('name')
const tel = document.getElementById('tel')
const address = document.getElementById('address')
const username = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const register = document.getElementById('register')
const message = document.getElementById('message')

// 檢查是否有正確得到dom元素的介面物件
// console.log(name, tel, address, username, password, password2, register)

register.addEventListener('click', function () {
  let error = ''

  // 檢查是否有填寫必要欄位

  if (!name.value.trim()) {
    alert('姓名沒填')
    return
  }
  if (!tel.value.trim()) {
    alert('電話沒填')
    return
  }

  if (!name.value.trim()) error += ' 姓名沒填 '
  if (!tel.value.trim()) error += ' 電話沒填'
  if (!address.value.trim()) error += ' 住址沒填'
  if (!username.value.trim()) error += ' 帳號沒填'
  if (!password.value.trim()) error += ' 密碼沒填'
  if (!password2.value.trim()) error += ' 密碼確認沒填'
  // 檢查長度
  if (username.value.length < 6) error += ' 帳號至少要6位'
  if (password.value.length < 6) error += ' 密碼至少要6位'
  // 檢查密碼與密碼確認欄位
  if (password.value !== password2.value) error += '兩次輸入的密碼不同'

  //message.innerHTML = error ? error : '表單驗証通過'

  // 和三元運算子相同結果
  if (error) {
    message.innerHTML = error
  } else {
    message.innerHTML = '表單驗証通過'
  }
})

// 獲得元素介面物件骰子
const dice = document.getElementById('dice')
const point = document.getElementById('point')
const start = document.getElementById('start')

start.addEventListener('click', function () {
  // 隨機產生一到六的整數
  const p = Math.floor(Math.random() * 6) + 1

  //用陣列改寫骰子範例
  const diceArray = ['one', 'two', 'three', 'four', 'five', 'six']
  dice.innerHTML = `<i class="fas fa-dice-${diceArray[p - 1]}"></i>`

  // // 對照要呈現的圖示的fontawesome標記
  // //fa-dice-one
  // let diceTag = ' '
  // switch (p) {
  //   case 1:
  //     diceTag = '<i class="fas fa-dice-one"></i>'
  //     break
  //   case 2:
  //     diceTag = '<i class="fas fa-dice-two"></i>'
  //     break
  //   case 3:
  //     diceTag = '<i class="fas fa-dice-three"></i>'
  //     break
  //   case 4:
  //     diceTag = '<i class="fas fa-dice-four"></i>'
  //     break
  //   case 5:
  //     diceTag = '<i class="fas fa-dice-five"></i>'
  //     break
  //   case 6:
  //     diceTag = '<i class="fas fa-dice-six"></i>'
  //     break
  // }
  // // 呈現 圖示
  // // <i class="fas fa-dice-one"></i>
  // dice.innerHTML = diceTag

  // 呈現 點數
  point.innerHTML = p + '點'
})

// 獲得元素介面物件骰子
const result = document.getElementById('result')
const play = document.getElementById('play')

play.addEventListener('click', function () {
  // 隨機產生1到100的整數
  const rand = Math.floor(Math.random() * 100) + 1
  //1~3
  if (rand > 0 && rand < 4) {
    result.innerHTML = '五星卡'
  }
  //4~20
  if (rand > 3 && rand < 21) {
    result.innerHTML = '四星卡'
  }
  //21~100
  if (rand > 20) {
    result.innerHTML = '三星卡'
  }
})

//for迴圈，"++"＝+1的意思
//continue如符合條件跳過自己繼續迴圈
//要跑出偶數2,4,6,8,10
// for (let count = 1; count < 11; ) {
//   if (count % 2 === 1) continue
//   console.log(count)
//   count++
// }
// //break如符合條件跳開迴圈停止執行
// //跑1,2就會停
// for (let count = 1; count < 11; ) {
//   if (count > 3) break
//   console.log(count)
//   count++
// }
