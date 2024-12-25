function BankAccount(customerName,balance=0) {
    this.customerName=customerName
    this.accountNumber=Math.floor(Math.random()*10000000000)
    this.balance=balance

    this.deposit = (amount)=> {
        this.balance+=amount
    }

    this.withdraw = (amount)=> {
        this.balance-=amount
    }
}


const accounts=[]
const accountForm = document.querySelector("#accountForm")
const customerName = document.querySelector('#customerName')
const balance = document.querySelector('#balance')
accountForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const account = new BankAccount(customerName.value,+balance.value)
    accounts.push(account)
    console.log(accounts)
})

const depositForm = document.querySelector('#depositForm')
const accountNumber = document.querySelector('#accountNumber')
const amount = document.querySelector('#amount')

depositForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const account = accounts.find((account)=> 
        account.accountNumber === +accountNumber.value
    )
    if(account) {
        account.deposit(+amount.value)
        console.log(account)
    } else {
        console.error('Account not found')
    }
})
const withdrawForm =  document.querySelector('#withdrawForm')
const withdrawAmount = document.querySelector('#withdrawAmount')
const w_accountNumber = document.querySelector('#wAccountNumber')

withdrawForm.addEventListener('submit',(e)=> {
    e.preventDefault()
    const account = accounts.find((account)=> 
        account.accountNumber === +w_accountNumber.value
    )
    if(account) {
        if(account.balance>=+withdrawAmount.value) {
            account.withdraw(+withdrawAmount.value)
            console.log(account)
        } else {
            console.error('Insufficient Funds')
        }
    } else {
        console.error('Account not found')
    }

})