{

// ternary oparator || optional chaining || nullish Coalescing Operator

 const age : number=14;
 if (age>=18){
    console.log('adult')
 }
 else{
    console.log('not adult')
 }

 const isAdult = age >=18 ? "adult" : "not adult";
//  console.log({isAdult})


 //Nullish coalescing operator
 //null / undefined upor nirbor kore --> decision making korle  atai nullsh operator;

//  const isAthenticated =null;
 const isAthenticated ='';
 const result1 =isAthenticated ?? "Guest";   // undefined ,null   hole true  hobe (??) nullish oparator
 const result2=isAthenticated ? isAthenticated : "Guest"   ;  // undefined,null, emty('') hole false  hobee
 console.log({result1}, {result2})

type User={
   name:string,
   address:{
      city:string,
      road:string,
      permanentAddress?: string,
      presentAddess:string,
}
}
 const user : User={
   name:'mehedi',
   address:{
      city:'ctg',
      road:'avernw',
      presentAddess:"ctg"
   }

}

const permanentAddress= user?.address?.permanentAddress ?? 'no permanentAddress found' ;
console.log({permanentAddress});

// const permanentAddress2= user?.address?.permanentAddress ? user?.address?.permanentAddress : "no found.." ;
// console.log({permanentAddress2})




}