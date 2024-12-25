async function getData() {
    return 'Hello JS'
}

const data1 = getData()
//console.log(data1)
const API_URI = 'https://jsonplaceholder.typicode.com/todos/1';
const p1 = function getPromise() {
    return new Promise((res,rej) => {
        setTimeout(()=>res('This is Promise Obj'),2000)
        
    })
}

const p2 = function getPromise1() {
    return new Promise((res,rej) => {
        setTimeout(()=>res('This is Promise Obj2'),3000)
        
    })
}
async function asyncFunc() {
    console.log('Started')
    const x = await p1()
    console.log('Learn JS')
    console.log(x)
    const y = await p2()
    console.log('Learn JS')
    console.log(y)
} 
async function fetchApiCall() {
    try{
        const x = await fetch(API_URI)
        //const x = await fetch("'https://jsonplaceholder.typicode.com/xei")
        const jsonVal = await x.json
        console.log(jsonVal)

    } catch(err) {
        console.error(err)
    }
   
}
//Another way of handling error.
//fetchApiCall().catch((rej)=>{console.error(rej)})
function Car(company,model) {
    console.log(this)
    this.make=company
    this.model=model
    this.print = function func() {
        console.log(this)
    }
}
const c1 = new Car('shift','i20')
c1.print()

asyncFunc()
fetchApiCall()
// getPromise().then((x)=>console.log(x))
// data1.then((res)=> console.log(res))
export {
    getData,
    p1,
    p2,
    asyncFunc,
    fetchApiCall,Car
}