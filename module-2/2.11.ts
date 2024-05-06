{
    //
    
    // Utility types>>
    // Pick .>add kora
     type Person ={
        name: string;
        age: number ;
        email?: string;
        contactNo: string;
     }
 type NameAge = Pick<Person,"name"| "age">
//
//ommit   -=---bad deoa
 type ContactInfo =Omit <Person, "name" | "age">
 //
 // Recuired 
 type PersonRequired = Required<Person>
 //
 // Partial --- optional 
 type PersonPartial = Partial <Person>
 //
 // ReadOnly/   - no change 
 type PersonReadOnly = Readonly<Person>
 //
 //Record
 type MyObj = Record<string, string>
 const obj1 : MyObj ={
    a: "aa",
    b:'bb',
    c:'cc'
 }
//
//Emty utility 
 const EmtyObj : Record <string ,unknown>={}

    //
}