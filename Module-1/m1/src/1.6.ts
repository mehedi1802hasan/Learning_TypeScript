//Leaning Type
////  Normal Type 
// Array Type

function add (num1:number,num2:number=10):number{
    return num1 +num2
}
add(2,2)
const addArrow=(num1:number,num2:number):number=>num1 + num2;

// ** Object ar bithor kono Function thakle thake Method Bola hoi 
// object --> function> method

const poorUser={
    name:"Mezba",
    balance:0,
    addBalance(balance:number):string{
        return `My new balance is: ${this.balance+balance}`
    }
}

const arr : number[]=[1,3,5];
const newArray:number[] =arr.map((elem:number):number=>elem*elem)