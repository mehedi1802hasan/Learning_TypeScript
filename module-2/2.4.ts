{
    //
// Generic With Interface in Object 

interface Developer<T,X = null>{
    name: string;
    computer:{
        brand: string;
        model: string;
        releaseYear: number;
    };
    smartWatch : T;
    bike?:X
}

type Emafl =
{
    brand:string;
    model:string;
    display:string
}


const poorDeveloper : Developer <Emafl> ={
    name:"Meehedi",
    computer:{
        brand:"Asus",
        model: "X-2343lx",
        releaseYear:2002
    },
    smartWatch : {
        brand: "Emafl",
        model: "K234",
        display: "Oled"
    },
    // bike:'af'
}

// const richDeveloper : Developer <{
//     brand:string;model:string;heartTrack:boolean;sleepTrack:boolean
// }> ={

 interface HueWeiBrand {
    brand:string;
    model:string;
    heartTrack:boolean;
    sleepTrack:boolean
     }

  interface YamahaBike {
    model: string;
    engine:string
  }   
    const richDeveloper : Developer <HueWeiBrand,YamahaBike> ={
    name:"Haasn",
    computer:{
        brand:"hp",
        model: "4-2343lx",
        releaseYear:2005
    },
    smartWatch : {
        brand: "HueWeiBrand",
        model: "T324",
        heartTrack: true,
        sleepTrack: true
    },
    bike:{
        model: 'h1233',
    engine:"230cc"
    }
}

    //
}