// import {func1} from './src/code.mjs'
// import * as codes from './src/code.mjs'
// import * as mul from './src/checker.mjs'
 import * as prom from './src/promprac.mjs'
// import * as func1 from './src/prommethodsexe.mjs'
// import * as func2 from './src/asyncawait.mjs'
//import * as funcx from './src/thisdemo.mjs'
// import * as funcy from './src/oops.mjs'
// import * as funcy from './src/DomManipulation.mjs'
//import {placeOrder,createOrder,processPayment} from './src/ecart.mjs'
//import {createOrder, proceedToPayment} from './src/ownpromise.mjs'
const cart = [{
    productId: "12345",
    name: "Track Suit",
    price: 500,
    brand: "Puma"
},
{
    productId: "12845",
    name: "T-Shirt",
    price: 300,
    brand: "Highlander"   
},
{
    productId: "12846",
    name: "Joggers",
    price: 2000,
    brand: "Nike"   
}
]
placeOrder(cart)
console.log('xxxxxxxx',this)
// Promise.allSettled([func1.p1,func1.p2,func1.p3]).then((res)=>{console.log(res)}).catch((err)=>console.log(err))

/*
const cart ='shirt'
createOrder(cart).then((orderId)=>{
    console.log('orderId is : ',orderId)
    return proceedToPayment(orderId)
}).then((paymentInfo) => {
    console.log(paymentInfo)
}).catch((err) =>{
    console.log(err.message)
})*/

// prom.createOrder(cart).then(orderId => {prom.showOrderSummary(orderId)
//     prom.proccedToPayment(orderId)})
// .then(paymentStatus => {
//     console.log(paymentStatus)
//     console.log('remaining balance :',prom.updateBalance())
// }).catch(err => console.log('error : ',err))

// console.log(mul.multiply(5,8))
// console.log(mul.addition(5,6))
// let x=[12,13,17,19,20,12,90,99]
// let evenNumbers = x.filter(i => i%2===0)
// console.log(evenNumbers)

// let nums = [11,14,22,29]
// function isPrime(num) {
//     let cnt=0
//     for(let i=2;i*i<=num;i++) {
//         if(num%i==0){
//             cnt++;
//         }
//     }
//     return cnt<1
// }
// let primeNumbers = nums.filter(i=>isPrime(i)).map(i => i*i)
// let primeSum = nums.filter(i=>isPrime(i)).reduce((sum,i)=>sum+i,0)
// console.log("prime sum is : ",primeSum)
// console.log(primeNumbers)
// let t=[{'name':'raju',
// 'age':26,'salary':1000000},
// {'name':'jag',
// 'age':26,'salary':2000000}
// ]
// console.log(t.filter(i => i.salary >1100000))

// let p='*'
// for(let i=1;i<6;i++){
//     let line=''
//     for(let j=1;j<=i;j++) {
//         line+=p;
//     }
//     console.log(line)
// }

// //////////////////////////////////
// let arr =[12,13,14,11,12,18,19,14,12]
// let seen = new Set()
// let duplicates = new Set()
// // arr.forEach(
// //     i => {
// //         if(seen.has(i)) {
// //             duplicates.add(i)
// //         } else {
// //             seen.add(i)
// //         }
// //     }
// // )

// // console.log("duplicates : ",Array.from(duplicates))
// // console.log("elements : ",Array.from(seen))
// let freqMap = new Map
// arr.forEach(ele => {
//     if(freqMap.has(ele)) {
//         freqMap.set(ele,freqMap.get(ele)+1)
//     } else {
//         freqMap.set(ele,1)
//     }
// })
// let ans =arr.filter(i => 
//     freqMap.get(i) === 1)
// let uniqueElements = arr.filter(item => freqMap.get(item) === 1);
// console.log("elements : ",ans)
// let o = [12,79,34,19,25,29]
// console.log(o.sort((a,b)=>b-a))


// function greet() {
//     say();
//     function say(){
//         console.log(msg)
//     }
// }
// let msg ='hello'
// greet()


// codes.res
//   .then(data => console.log("Filtered result:", data))
//   .catch(err => console.error("Error:", err));
// console.log('area is : ',arr.map(codes.area))

// console.log(codes.user.then())