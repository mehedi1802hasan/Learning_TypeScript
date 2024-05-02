// Reference Type >> Object 

const user : {
    company:"Programming Hero";  // type: -->> Literal type  
    firstName:string;
    middleName?:string;  // Optional Type 
    readonly lastName:string;  // Cannot change it for ReadOnly 
    isMarried:boolean;
} ={
    company:"Programming Hero",
    firstName:"Jhankar",
    lastName:"Mahbub",
    isMarried:true,
}
// user.company ='ph';   // can not change because it is literal type
user.firstName='Mehedi';  // we can change it .
// user.lastName="Jahid" // Cannot change it for ReadOnly