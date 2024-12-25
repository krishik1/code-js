// //import { res } from "./code.mjs"

// let cart=['shirt','pant','dothi']

// export function createOrder(cart) {
//     return new Promise((res,rej)=>{
//         if(!validate(cart)) {
//             const err = new Error('Cart is not valid')
//             rej(err)
//             return ;
//         }
//         let orderId = Math.floor(100000+Math.random()*900000)
//         setTimeout(()=>res(orderId),1000)
//     });
// }
// export function validate(cart) {
//     return true;
// }

// export function proceedToPayment(orderId) {
//     return new Promise((res,rej)=>{
//         if(orderId){
//             console.log('payment initiated for order with ',orderId)
//             res('Payment Successful')
//         } else {
//             rej('Payment Failed')
//         }
        
//     })
// }
// // createOrder(cart).then((orderId)=>{
// //     console.log('orderId is : ',orderId)
// //     return orderId
// // }).then((orderId) => {
// //     return proceedToPayment(orderId)
// // }).then((paymentInfo) => {
// //     console.log(paymentInfo)
// // }).catch((err) =>{
// //     console.log(err.message)
// // })