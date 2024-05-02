{
  // spread oparator    arrray theke element golake choriye fele
  // rest oparator  element golake arrray te convert kore fele
  //  Learn Spread operator
  const boss1: string[] = ["Mir", "Firoz", "MizAN"];
  const boss2: string[] = ["Tonmoy", "Mehedi", "Hasan"];
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
  const mentorList = {
    ...mentor1,
    ...mentor2,
  };

  // learn rest oparator

  // normal
  const xFrineds = (friend1: string, friend2: string, friend3: string) => {
    console.log(`Hi ${friend1} ${friend2} ${friend3}`);
  };
  xFrineds("Abul", "kabul", "babul");

  //using rest oparator
  const greetFrineds = (...friends: string[]) => {
    frineds.forEach((friend: string) => console.log(friend));
  };
  greetFrineds("Abul", "kabul", "babul", "ubol", "mambul");
}
