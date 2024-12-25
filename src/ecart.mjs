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

const wallet = {
    id:'rajkrish@Icici',
    balance : 6000
}

async function placeOrder(cart) {
    try {
        const order = await createOrder(cart)
        const bill = await processPayment(order,wallet)
        console.log('Wallet Balance : ',wallet.balance)
        console.log('Order placed successfully. Your order will be delivered in 48 hours.')
    } catch(err) {
        console.log('You are unable to place this order')
    }

}

async function createOrder(cart) {
    return new Promise((res,rej) => {
        setTimeout(()=>{
            if(!cart || cart.length==0) {
                rej(new Error('Cart is Empty .'))
            } else {
                console.log("Ordering Items : ",cart)
                const order = {
                    orderId : 'ORD'+Math.floor(Math.random()*10000),
                    noOfItems : cart.length,
                    total : cart.reduce((sum,val)=>sum+=val.price,0)
                }
                console.log("Order created:", order);
                res(order)
            }
        },1000)
    })
}

async function processPayment(order,wallet) {
    return new Promise((res,rej)=>{
        if(order.total<=wallet.balance) {
            const bill = {
                transactionNo : "BNO"+Math.floor(Math.random()*10000),
                amount : order.total,
                paymentMode : 'UPI',
                deliveryDate : Date.now()+48 * 60 * 60 * 1000
            }
            wallet.balance-=order.total 
            console.log("Billing Details :", bill);
            res(bill)
        } else {
            rej(new Error('You do not have sufficient balance to process this order .'))
        }
    })
}
placeOrder(cart)
export {
    cart,
    wallet,
    placeOrder,
    createOrder,
    processPayment
}