{
  //
  //  generic type
  //  const rollNumbers: number [] = [1,2,3,4,5];
  const rollNumbers: Array<number> = [1, 2, 3, 4, 5];
  //  const mentors : string []=['Mr.X',"MR.y"]
  const mentors: Array<string> = ["MR.X", "MR. Y"];

  //    const boolean : boolean [] =[ true ,false ,true]
  const boolean: Array<boolean> = [true, false, true];

  //
  // type GenericArray = Array <number>;
  // const rollNumber: Array <number> = [1,2,3,4,5];
  // const rollNumber: GenericArray= [1,2,3,4,5];

  type GenericArray<T> = Array<T>;
  const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5];
  const mentor: GenericArray<string> = ["a", "b", "c"];

  const boolArray: GenericArray<boolean> = [true, true, false];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Mehedi",
      age: 21,
    },
    {
      name: "Hasan",
      age: 32,
    },
  ];

 

   // generic using in touple>>
    type GenericTuple <X,Y>=[X,Y];
    const manush : GenericTuple<string,string>= ["MR.X", "MR.Y"];
    const userWithID : GenericTuple<number,{name: string, email:string}> = [123, {name:"persian", email:"a@gmail.com "}]


  //
}
