{
  // using Generic in Function

  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const res1= createArray ("Bangladesh");
  const res2 = createArrayWithGeneric <string>("Bangladesh")
  const resGeneicObj = createArrayWithGeneric<{id:number , name:string}> ({id:22 , name:"Hasan"})

/// Generic function  with  Touple

const createArrayWithTuple = <T,Q>(param1: T,param2: Q): [T,Q] => {
    return [param1 ,param2];
  };
//   const res1= createArray ("Bangladesh");
  const res22 = createArrayWithTuple <string,number>("Bangladesh",213)
  const resGeneicObj1 = createArrayWithTuple<{id:number , name:string},string> ({id:22 , name:"Hasan"},"bangadesh")

const addCourseToStudent =<T>(student : T)=>{

    const course ="NExt Level Web Development "
    return {
        ...student,
        course
    }
}
const student1 =addCourseToStudent({name:"MR.X ", email:"x@gmail.com"})



  //
}
