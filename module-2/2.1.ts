{
//
    /// type  aseertion ( veriable name as data type(like: number/string/boolean))
   let anything : any;

   anything ="Next level web developement ";

   anything =222;
   (anything as number)

  const kgToGram =(value: string | number) : string| number | undefined=>{
  
    if(typeof value ==="string"){
        const convertedValue = parseFloat(value)*1000;
        return `The converted Value is : ${convertedValue}`;
    }
    if (typeof value==="number"){
        return value* 1000 ;
    }


  }
  
  const result1 = kgToGram(1000) as number;
  const result2 =kgToGram('1000') as string;

 //
}