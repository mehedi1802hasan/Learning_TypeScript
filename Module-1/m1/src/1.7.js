"use strict";
{
    // spread oparator    arrray theke element golake choriye fele
    // rest oparator  element golake arrray te convert kore fele
    //  Learn Spread operator
    const boss1 = ["Mir", "Firoz", "MizAN"];
    const boss2 = ["Tonmoy", "Mehedi", "Hasan"];
    boss1.push(...boss2);
    const mentor1 = {
        typescript: "mezba",
        redux: "Mir",
        Dbms: "mizan",
    };
    const mentor2 = {
        prisma: "Firoz",
        next: "tonmoy",
        cloud: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentor1), mentor2);
    // learn rest oparator
    // normal
    const xFrineds = (friend1, friend2, friend3) => {
        console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    };
    xFrineds("Abul", "kabul", "babul");
    //using rest oparator
    const greetFrineds = (...friends) => {
        frineds.forEach((friend) => console.log(friend));
    };
    greetFrineds("Abul", "kabul", "babul", "ubol", "mambul");
}
