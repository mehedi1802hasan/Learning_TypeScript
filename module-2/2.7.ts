{
//
// Generic Constraint with keyof operator

type Vehicle ={
    bike : string;
    car : string;
    ship : string;
}

type Owner = "bike" | "car"|"ship" //menually;
type Owner2 = keyof Vehicle;
const person1 : Owner2 ="car"


const getPropertyValue = <X,Y extends keyof X> (obj: X ,key :Y)=>{
    return obj[key];
}

const user ={
    name:"mehedi",
    age:35,
    address: "ctg"  
}
const result1 = getPropertyValue (user,'name')
//


}