{
    //
   //Constraints In Typescript

    const addCourseToStudent =<T extends {id: number ; name: string; email:string}>(student : T)=>{

        const course ="Next Level Web Development "
        return {
            ...student,
            course
        }
    }
    const student1 =addCourseToStudent<
    {
        id: number;
        name: string;
        email: string;
        devType: string;
    }>(
        {
        id:2134,
        name:"MR.X ",
        email:"x@gmail.com",
        devType:"NLWD"
        }
        )

        const student2 =addCourseToStudent(
            {
            id:2134,
            name:"MR.Y ",
            email:"y@gmail.com",
            model:"DDLWD"
            }
            )

    //
}