function BankAccount(customerName,balance=0) {
    this.customerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance;

     this.deposit=function(balance) {
        this.balance+=balance
    }
    this.withDraw = (balance) => this.balance+=balance

    
}
const raju = new BankAccount('Raju',1000)
const adi = new BankAccount('Adhitya',500)

raju.deposit(5000)
raju.withDraw(2000)

console.log(raju.accountNumber+" "+raju.customerName+" "+raju.balance)
console.log(adi.accountNumber+" "+adi.customerName+" "+adi.balance)
export {
    raju,
    adi
}