{
    // destructuring 

// object destructuring  
const user ={
    id:1234,
    name:{
        firstName:"Mehedi",
        middleName:"Hasan",
        lastName:"Midi"
    },
    contactName:1680230,
    address:"Bangladesh",
}

 const {
    id,
    contactName: phoneNumber ,
    name:{firstName:fName}
    }  = user


    // Array destructuring 
 const myFriend :string[] =['x','y','z']
  const [a,b,bestFriend]=myFriend
//   const [,,dotFriend]=myFriend   x >,   y>, z>dotFrinend
const enymy :string[] =['x','y','z','a','b','c']
const [,,bestEnimy,...anotherAll]=enymy; //x>,   y>,   z>bestEnimy   a,b,c>anotherAll

}