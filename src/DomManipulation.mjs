// //get element by id
// const header = document.getElementById('heading')
// console.log(header)
// //get element by tag
// const tag = document.getElementsByTagName('h1')
// console.log(tag)
//get element by class
// const tag = document.getElementsByTagName('h1')
// console.log(tag)
//QuerySelector == #for Id and .for class
//Class
//const header = document.querySelector('.heading')
//ID
// const header = document.querySelector('#heading')
// console.log(header)
//QuerySelectorAll : gives the collection of all items
// const tags = document.querySelectorAll('.heading')
// console.log(tags)
//Traverse Dom
//1.Parent Node
// const header = document.querySelector('.heading')
// const parent =  header.parentNode
// console.log(parent)
//2.child nodes
// const header = document.querySelector('.parent')
// console.log(header.childNodes)
//3.call sibilings 
// const header1 = document.querySelector('h2');
// console.log(header1.previousElementSibling)

//Manipulation  
// const header = document.querySelector('.heading')
// header.innerHTML = 'Web Devlopment Using JavaScript Is Awesome'
// header.style.color='blue'
// header.classList.add('title')
// header.classList.remove('heading')
//Create ELements 
// const header = document.createElement('h3')
// header.innerHTML="React Is Awesome!"
// header.style.color='red'
// header.classList.add('title')
// const parent = document.querySelector('.parent')
// parent.append(header)

// console.log(header)

// const hadd = document.createElement('h3')
// hadd.innerHTML='JavaScript Is Awesome !'
// hadd.style.color='blue'
// //insertAdjacentElement(position, element)
// // 4 positions : 'beforebegin','afterbegin','beforeend','afterend'

// header.insertAdjacentElement('beforebegin',hadd)
// DOM Events
// const button = document.querySelector('#btn')
// const header = document.querySelector('.heading')

// button.addEventListener('click', (event) =>{
//     header.style.color='purple'
//     console.log(event)
// })

//project toggle bulb
/*
const bulb = document.querySelector('#bulb')
const button = document.querySelector('#btn')
button.addEventListener("click",()=>{
    console.log(bulb.src)
    
    if(bulb.src.match("./pic_bulboff.gif")) {
        bulb.src="./img_bulbon.gif"
        button.innerHTML='Turn OFF'
    } else {
        bulb.src="./pic_bulboff.gif"
        button.innerHTML='Turn ON'
    }
}) */

const root = document.querySelector('#root')
const button = document.querySelector('#btn')
function createItem(item) {
    const card = document.createElement('div')
    card.classList.add('card')

    const photo = document.createElement('img')
    photo.src = item.image

    const title = document.createElement('h4')
    title.innerHTML = item.title

    card.append(photo)
    card.append(title)
    root.append(card)


}
function displayPhotos(items) {
    console.log(items)
    items.forEach(item => {
        createItem(item)
    });
}

button.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.org/posts')
    .then((res) => res.json()).then((item)=>displayPhotos(item))

})




