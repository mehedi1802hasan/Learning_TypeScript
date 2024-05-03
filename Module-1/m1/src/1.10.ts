{

// UNion and Intersection Types>>

 // Union Types.
 type FrontendDeveloper ="fakibazDeveloper"| "juniorDeveloper";
  type FullStackDeveloper ="frontendDeveloper" | "backendDeveloper" 
type Developer = FrontendDeveloper | FullStackDeveloper
 const newDeveloper :FrontendDeveloper ="juniorDeveloper"


 type User ={
    name:string;
    email?:string;
    gender:"male"|"female";
    bloodGroup:"O+"|"A+"|"AB+"
 }

 const user :User ={
    name:'Mehedi',
    gender:"male",
    bloodGroup:"A+"
 }


 

 // Intersection Types...>
  type FrontDev ={
    skills: string[];
    designation1: "Frontend Developer"
  }
  type BackDev={
    skills:string[];
    designation2:"BackEnd Developer "
  }

  type FullDev=FrontDev & BackDev;

  const fullStackDeveloper : FullDev={
    skills:['HTML',"CSS","Express"],
    designation1:"Frontend Developer",
    designation2:"BackEnd Developer "
  }


}