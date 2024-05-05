{
    //
// interface  .. it is look like type alias   
// type alias
type User1 ={
    name: string;
    age: number;
};
// interface 
interface User2{
    name: string;
    age:number;
  }

//   const user1 : User1={
//     name:"Mehedi",
//     age:100,
// }

// const user1 : User2={
//     name:"Mehedi",
//     age:100,
// }

//
// add something then use intersection in  type alias..
type userWithRole1 = User1 & { role:string};
// add something then use extends in  interface
interface userWithRole2 extends User2 {
    role : string
}
// const user1 : userWithRole1 ={
//     name:"mehedi",
//     age:230,
//     role:"manager"
// }
const user1 : userWithRole2 ={
    name:"mehedi",
    age:230,
    role:"manager"
}



    //
}