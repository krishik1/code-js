class BankAccount {
    customerName
    accountNumber
    #balance=0

    constructor(customerName,balance) {
        this.customerName=customerName
        this.accountNumber=Math.floor(Math.random()*10000000000)
        this.#balance=balance
    }

    set balance(amount) {
        if(isNaN(amount)){
            throw new Error('Amount is not a valid input .')
        }
        this.#balance+=amount
    }
    get balance() {
        return this.#balance
    }
    deposit(amount) {
        this.balance+=amount
    }

    withdraw(amount) {
        this.balance-=amount
    }


}

class CurrentAccount extends BankAccount {
    limit=50000
    constructor(customerName,balance) {
        super(customerName,balance)
    }
    
    #calculateIntrest() {
        console.log("For every 1000 intrest is 100 for CurrentAccount")
    }

    takePersonalLoan(amount) {
        this.#calculateIntrest()
        if(this.limit>=amount) {
            console.log("Taking Personal Loan From Current Account : ",amount)
        } else {
            console.error("You Are Not Eligible For This Amount .")
        }
    }
}

class SavingAccount extends BankAccount {
    limit=60000
    constructor(customerName,balance) {
        super(customerName,balance)
    }
    
    #calculateIntrest() {
        console.log("For every 1000 intrest is 100 for SavingAccount")
    }

    takePersonalLoan(amount) {
        this.#calculateIntrest()
        if(this.limit>=amount) {
            console.log("Taking Personal Loan From Saving Account : ",amount)
        } else {
            console.error("You Are Not Eligible For This Amount .")
        }
    }
}

const krishikAccount = new SavingAccount("Krishik",1000)
krishikAccount.deposit(2000)
krishikAccount.takePersonalLoan(40000)
const hariAccount = new CurrentAccount("Harish",2000)
hariAccount.withdraw(1000)
hariAccount.takePersonalLoan(40000)
krishikAccount.balance=4000
console.log(krishikAccount.balance)

console.log(krishikAccount)
console.log(hariAccount)
