let x=[12,13,17,19,20,12,90,99]
let evenNumbers = x.filter(i => i%2===0)
console.log(evenNumbers)

let nums = [11,14,22,29]
function isPrime(num) {
    let cnt=0
    for(let i=2;i*i<=num;i++) {
        if(num%i==0){
            cnt++;
        }
    }
    return cnt<1
}
let primeNumbers = nums.filter(i=>isPrime(i)).map(i => i*i)
let primeSum = nums.filter(i=>isPrime(i)).reduce((sum,i)=>sum+i,0)
console.log("prime sum is : ",primeSum)
console.log(primeNumbers)
let t=[{'name':'raju',
'age':26,'salary':1000000},
{'name':'jag',
'age':26,'salary':2000000}
]
console.log(t.filter(i => i.salary >1100000))

let p='*'
for(let i=1;i<6;i++){
    let line=''
    for(let j=1;j<=i;j++) {
        line+=p;
    }
    console.log(line)
}

//////////////////////////////////
let arr =[12,13,14,11,12,18,19,14,12]
let seen = new Set()
let duplicates = new Set()
// arr.forEach(
//     i => {
//         if(seen.has(i)) {
//             duplicates.add(i)
//         } else {
//             seen.add(i)
//         }
//     }
// )

// console.log("duplicates : ",Array.from(duplicates))
// console.log("elements : ",Array.from(seen))
let freqMap = new Map
arr.forEach(ele => {
    if(freqMap.has(ele)) {
        freqMap.set(ele,freqMap.get(ele)+1)
    } else {
        freqMap.set(ele,1)
    }
})
let ans =arr.filter(i => 
    freqMap.get(i) === 1)
let uniqueElements = arr.filter(item => freqMap.get(item) === 1);
console.log("elements : ",ans)
console.log('checking let and const')

