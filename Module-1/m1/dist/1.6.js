"use strict";
//Leaning Type
////  Normal Type 
// Array Type
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(2, 2);
const addArrow = (num1, num2) => num1 + num2;
// ** Object ar bithor kono Function thakle thake Method Bola hoi 
// object --> function> method
const poorUser = {
    name: "Mezba",
    balance: 0,
    addBalance(balance) {
        return `My new balance is: ${this.balance + balance}`;
    }
};
const arr = [1, 3, 5];
const newArray = arr.map((elem) => elem * elem);
