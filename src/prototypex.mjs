/**function BankAccount(customerName,balance=0) {
    this.customerName=customerName
    this.accountNumber=Math.floor(Math.random()*10000000000)
    this.balance=balance

    
}


BankAccount.prototype.deposit= function deposit(amount) {
    this.balance+=amount
}
BankAccount.prototype.withdraw= function withdraw(amount) {
    this.balance-=amount
}
const krishikAccount = new BankAccount("Krishik",1000)
krishikAccount.deposit(2000)
const hariAccount = new BankAccount("Harish",2000)
hariAccount.withdraw(1000)

console.log(krishikAccount)
console.log(hariAccount)**/

// Using Class
class BankAccount {
    customerName
    accountNumber
    balance=0

    constructor(customerName,balance) {
        this.customerName=customerName
        this.accountNumber=Math.floor(Math.random()*10000000000)
        this.balance=balance
    }

    deposit(amount) {
        this.balance+=amount
    }

    withdraw(amount) {
        this.balance-=amount
    }


}

const krishikAccount = new BankAccount("Krishik",1000)
krishikAccount.deposit(2000)
const hariAccount = new BankAccount("Harish",2000)
hariAccount.withdraw(1000)

console.log(krishikAccount)
console.log(hariAccount)
