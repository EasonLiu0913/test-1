const desk = document.getElementById('desk')
const pointTotal = document.getElementById('pointTotal')
const message = document.getElementById('message')
const deal = document.getElementById('deal')

// poker函式庫產生卡片圖形的參數
// 參考：https://tairraos.github.io/Poker.JS/#chinese-version-readme
// size  - 牌的象素高度。牌的宽高比固定为3:4。缺省值为200。
// suit  - 牌面花色。取值大小写不敏感，必须为下列[]内的值之一：
//         ['h', 'hearts', 'd', 'diamonds', 's', 'spades', 'c', 'clubs']
//         值对应红桃，方块，黑桃，梅花, 'h', 'd', 's', 'c' 是缩略写法
//         当牌面点数为'JOKER'时，红桃和方块表示牌为大王；黑桃和梅花表示牌为小王。
//         缺省值为'h'
// point - 牌面点数。取值大小写不敏感，必须为下列[]内的值之一：
//         ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'O', 'JOKER']
//         'O'(字母O)是'JOKER'的缩略写法
//         缺省值为'O'
// desk.appendChild(Poker.getCardImage(60, 'h', 'q'))

// 花色用的對應陣列
const suitArray = ['h', 'd', 's', 'c']

//建立每張牌的物件值的工廠模式
//point 1~13
//丟入兩個參數傳出三個屬性
function createCard(suit, point) {
  let img = null
  switch (point) {
    case 1:
      img = Poker.getCardImage(60, suit, 'A')
      break
    case 11:
      img = Poker.getCardImage(60, suit, 'J')
      break
    case 12:
      img = Poker.getCardImage(60, suit, 'Q')
      break
    case 13:
      img = Poker.getCardImage(60, suit, 'K')
      break
    default:
      img = Poker.getCardImage(60, suit, point)
      break
  }

  return { suit, point, img }
}

function shuffleArray(inputArray) {
  //複製一個新的陣列不影響原陣列
  const array = [...inputArray]
  //洗牌公式
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }



  return array
}

// 宣告準備要一副牌加入卡片的陣列
const cards = []
//用全域變數控制目前發到第幾張牌
let cardIndex = 0
//記錄目前牌桌上的總點數
let total = 0

// 產生一整副牌的物件值
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 13; j++) {
    cards.push(createCard(suitArray[i], j + 1))
  }
}

const shuffleCards = shuffleArray(cards)

//發牌
deal.addEventListener('click', function () {
  const cardNow = { ...shuffleCards[cardIndex] }
  total += cardNow.point > 10 ? 0.5 : cardNow.point
  pointTotal.innerHTML = '總點數：' + total + '點'
  desk.appendChild(cardNow.img)

  if (total > 10.5) {
    message.innerHTML = '爆了'
  }

  if (total === 10.5) {
    message.innerHTML = 'you win'
  }

  cardIndex++
})

console.log(shuffleCards)
console.log(Poker.getCardImage(60, 'h', 'q'))
