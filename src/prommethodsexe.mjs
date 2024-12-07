
let p1 = new Promise((res,rej)=> {
    //setTimeout(()=> res('P1 Success'),2000)
    setTimeout(()=> rej('P1 Failed'),2000)
})

let p2 = new Promise((res,rej)=> {
    //setTimeout(()=> res('P2 Success'),1000)
    setTimeout(()=> rej('P2 Failed'),1000)
})

let p3 = new Promise((res,rej)=> {
    //setTimeout(()=> res('P3 Success'),5000)
    setTimeout(()=> rej('P3 Failed'),5000)
})

Promise.any([p1,p2,p3]).then((res)=>{console.log(res)}).catch((err)=>
//console.err(err)
console.log(err.errors))

export {
    p1,p2,p3
}