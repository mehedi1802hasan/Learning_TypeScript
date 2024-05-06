{
  //
  // mapped types>>
  const arrOfNumbers: number[] = [1, 2, 3, 4, 5];
  // const arrOfStrings : string[]=['1','2','3','4','5']
  const arrOfStrings: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );
  console.log(arrOfStrings);

  type AreaNumber = {
    hight: number;
    width: number;
  };

  type AreaString = {
    [index in keyof AreaNumber]: string;
  };

  type AreaMapingString<T> = {
    [abc in keyof T]: T[abc];
  };
  const area1: AreaMapingString<{
    height: string;
    width: number;
  }> = {
    height: "100",
    width: 200,
  };
  //
}
