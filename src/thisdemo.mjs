console.log("state :",this)

function print() {
    console.log(this)
}
let raj = {
    name :'raju',
    address: { street: "123 Main St",
    city: "Wonderland" }
}
console.log('address is : ',raj && raj.address && raj.address.city)
// Usin optional chaining
console.log('address is using optional chaining : ',raj ?.address ?.city)

// ternary operator
console.log('name is : ',raj.name ==='raju'?'gopal':'santhu')

const student = {
    name: 'gopal',
    printName : function() {
        console.log('He is ',this.name)
    }
}
student.printName()
const student2 = {
    name:'krishik'
}
student.printName.call(student2)


print()
//window.print()
const obj = {
    a:10,
    x: () => {
        console.log('ref ',this)
    }

}
obj.x()

const obj1 = {
    a:10,
    x: function() {
        const y =() => {
        console.log('ref  y',this)
        }
        y()
    }

}
obj1.x()
// this Inside lambda
export{
    print,
    obj,
    student,
    student2,
    obj1,
    raj
}