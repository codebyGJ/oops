class BankAccount{
customerName;
accountNumber;
balance = 0;

constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}
// two properties deposite & withdraw
deposit(amount){
    this.balance +=amount;
}

withdram(amount){
    this.balance-= amount;
}}

//two classes CurrentAccount & SavingAccount
class CurrentAccount extends BankAccount{
transactionlimit = 60000;

constructor(customerName, balance = 0) {
    super(customerName, balance);

}
//Bussinessloan in CurrentAccount
takeBussinessloan(amount){
console.log ('Taking Bussiness loan: ' + amount);
}
}

class SavingAccount extends BankAccount{
    transactionlimit = 25000;
    
    constructor(customerName, balance = 0) {
        super(customerName, balance);
    
    }
    //Personal loan in Saving Account
    takePersonalloan(amount){
    console.log ('Taking Personal loan: ' + amount);
    }
}


// Callling Current account properties
const AbhiAccount = new CurrentAccount('Abhi', 60000);
AbhiAccount.deposit(500000);
AbhiAccount.withdram(10000);
AbhiAccount.takeBussinessloan(50000000);
console.log(AbhiAccount);

// Callling Saving account properties
const girishAccount =  new SavingAccount('Girish J', 5000);
girishAccount.deposit(5000);
girishAccount.withdram(10000);
girishAccount.takePersonalloan(120000);
console.log(girishAccount);

