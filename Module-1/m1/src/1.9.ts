{
    // Type Alias

type Student={
    name:string;
    age:number;
    gender:string;
    contactNo?:number;
    address:string
}

 const student1 : Student={
    name:"Mehedi",
    age:40,
    gender:"male",
    contactNo:12345566,
    address:'Sreemangal'
 }

 const student2 : Student={
    name:"Hasan",
    age:50,
    gender:"male",
    contactNo:992345566,
    address:'Brahmanbaria'
 }

 const student3 : Student={
    name:"Manikka",
    age:60,
    gender:"male",
    address:'Dhaka'
 }

type UserName = string;
type IsAdmin = boolean;
 const userName :UserName ="Mehedi";
 const isAdmin : IsAdmin =true
   
//  const add =(num1:number,num2:number):number=>num1+ num2;

type Add = (num1:number,num2:number)=>number;
 const add :Add =(num1,num2)=>num1+ num2;



}