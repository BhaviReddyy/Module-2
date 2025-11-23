//Q10.SIMPLE CLOSURE 
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const c = counter();
console.log(c());
console.log(c());
console.log(c());

//Q11.MEDIUM CLOSURE
function creatWallet() {
    let balance = 0;
    return {
        addMoney(amount) {
            balance += amount;
        },
        checkBalance() {
            return balance;
        }
    };
}
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
console.log(myWallet, checkBalance());