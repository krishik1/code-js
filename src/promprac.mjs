
function createOrder(x){
    return new Promise(
        (res,rej) => {
            if(x.length >0) {
                const orderIds = x.map(item => item + "12345").join(', ');
                res(orderIds)
            } else {
                rej("Cart Is Empty.")
            }
        }
    ); 
} 

function proccedToPayment(orderId) {
    return new Promise(
        (res) => {
            console.log('payment Initiated For Order : ',orderId)
            res('Payment Successful');
        } 
    );
}

function showOrderSummary(orderId) {
    console.log('Order Summary: ', orderId);
}

function updateBalance() {
    return 1000; 
} 


export {
    createOrder,
    proccedToPayment,
    showOrderSummary,
    updateBalance
}