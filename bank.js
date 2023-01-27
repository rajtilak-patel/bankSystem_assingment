let total = document.querySelector('.total');

function BankAccount(userName,balance) {

    this.userName = userName,
    this.accountNo = Date.now(),
    this.balance = +balance,

    this.deposite = function(amount){
        this.balance = balance+amount;
    },
    
    this.withdraw = function(amount){

        if(amount> balance){
            alert("Not Enough Balance")
        }
        else{
            this.balance -= amount;

        }
  
    }
   
}
let balance = document.getElementById("balance")
const accountForm = document.getElementById("accountForm");
const newAccount = document.getElementById("account-name");

const amount = document.getElementById("amount");



const deposite = document.getElementById("deposite");
const de_number = document.getElementById("de-number");
const de_amount = document.getElementById("de-amount");

const withdraw = document.getElementById("withdraw");
const wi_number  = document.getElementById("wi-number");
const wi_amount = document.getElementById("wi-amount");

let accounts = [];

var cartVal = document.createElement("h4");

accountForm.addEventListener("submit",(e)=>{
    e.preventDefault();

   let account =  new BankAccount(newAccount.value,+amount.value);
  


   accounts.push(account);
   console.log(account);

        cartVal = document.createElement("h4");
        cartVal.innerText = "Total:-  ₹ " +  account.balance;

//    console.log(account.accountNo);

   let app = document.querySelector('#app');
   app.append(`${account.accountNo}`);


   total = document.querySelector('.total').append(cartVal)
//    total.append(`Total balance :- ${account.balance}`)
  


})

deposite.addEventListener("submit",(e)=>{
    e.preventDefault();

   let account =  accounts.find((account)=> account.accountNo === +de_number.value)
  
    account.deposite(+de_amount.value)
    
    accounts.push(account);
    // total = account.balance

   console.log(account);
     total = document.querySelector('.total');
    //   total.append(`Total balance :- ${account.balance}`)
      cartVal.innerText = "Total:- ₹ " +  account.balance;
    //   total.append(`Total amount :- ${account.balance}`)

})


withdraw.addEventListener("submit",(e)=>{
    e.preventDefault();

   let account =  accounts.find((account)=> account.accountNo === +wi_number.value)
  
    account.withdraw(+wi_amount.value)

    total = document.querySelector('.total');
//    total.append(`Total balance :- ${account.balance}`)
     cartVal.innerText = "Total:- ₹ " +  account.balance;
    //    accounts.push(account);
    // total = account.balance;
   console.log(accounts); 

})

