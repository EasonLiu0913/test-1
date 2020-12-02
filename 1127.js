const a = [1, 2, 3]

//淺拷貝，b拷貝a陣列，變數i=index可以自行另外命名，只是習慣用i當作索引值
const b = []
for (let i = 0; i < a.length; i++) {
  b[i] = a[i]
}

//'...'是展開運算子，下列也可以拷貝陣列，...要跟a黏在一起，是ES6很流行的用法
const c = [...a]
//範例2 b陣列加入a陣列成員
const aArray = [1, 2, 3]
const bArray = [5, 6, ...aArray, 8, 9]
console.log(bArray)

//範例：判斷a是否為陣列
Array.isArray(a)

//indexOf用值去找索引值，是簡便的搜尋索引值用的方法
//如果找到的話就會回傳成員的索引值，沒找到就會回傳"-1"數字。
//多個成員符合的話，它只會回傳最先找到的那個(一律是從左至右)

const a = ['a', 'b', 'c', 'a', 'c', 'c']

a.indexOf('a')//索引值0，雖然a有多個但回傳結果會從最左邊的開始
a.indexOf(x)//x沒有在陣列裡，結果會回傳-1

//有副作用的方法（pop,shift,push,unshift)//

//pop 抓最後一個值去除掉
let a=[1,2,3]
let popValue = a.pop()
console.log(a) //[1,2]
console.log(popValue) //3
//shift 抓第一個值去除掉
a.shift()//[2,3]
//push 從最後一個塞入值
a.push(4)//[1,2,3,4]
//unshift 從第一個塞入值
a.unshift(4)//[4,1,2,3]

//組合陣列
const a=[1,2,3]
const b=[8,9,10]
const c=[...a,...b]//[1,2,3,8,9,10]

const c=a+b//這樣會先轉變成字串再相加，陣列不能這樣相加

//切片 slice(開始的索引值 ， 終點：要切掉的值不包含自己的索引值)
const a=[1,2,3,4]
const b=a.slice(0,2)//[1,2]

//for each類似於for迴圈但有副作用，
 //它執行語句的是放在回調函式(callback)的語句中用迭代的方式
const a=[1,2,3,4,5]
a.forEach(function(value,index,array){
    //對陣列元素做某些事
    console.log('index=',index,'value=',array[index])
})

//map 行為與forEach幾乎一模一樣且沒有副作用
//常用的迭代方法
//不同的地方是它會回傳一個新的陣列，也因為它可以回傳新陣列
//範例：b利用map產生a的值＊2的陣列
const a=[1,2,3,4,5]
const b=a.map(function(value,index,array){
return value*2
})
//簡潔用法
const b=a.map((v)=>v*2)

//排序 sort
const a=[6,1,99,7,5]
a.sort()//[1,5,6,7,99]數字由小到大排序
a.sort(function(a,b){
    return b-a
})
//a,b是比較函數a小b大，b-a:[99,7,6,5,1]數字由大到小排序

//findIndex找索引值，indexOf不同的地方是在於，
//findIndex因為使用了回調(callback)函式搜尋可以較有彈性，indexOf只能找單一個索引值
const array=[1,88,9,88,14]
const fIndex=array.findIndex(function(value,index,array){
    return value>50
})
//＊find 跟findIndex類似只是find是找值，findIndex找索引值
//＊includes 找陣列裡是否有這個值，會回傳布林值true or false
const array=[1,88,9,88,14]
array.includes(9)//true

//filter 篩選並產生新的陣列
const array=[1,88,9,188,14]
const b=array.filter(function(value,index,array){
    return value>50
})//篩選>50的值[88,188]
//範例2 從[1,2,3,2,2,4]篩掉2變成[1,3,4]
const array=[1,2,3,2,2,4]
const b=array.filter(function(value,index,array){
    return value !==2
})//要值不等於2的成員,只要是2都會被殺掉

//join & split 記得要用（‘，’）分開
.join(',') //陣列變字串
.split(',')//字串變陣列

a='true'
a=parseInt(a)
