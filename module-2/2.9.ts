{
  //
  // conditional type>>

  type a1 = null;
  type b1 = string;

  type x = a1 extends null ? true : false; // conditional type
  type y = a1 extends number ? true : b1 extends string ? string : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  type ChekhVehicle<T> = T extends keyof Sheikh ? true : false;
  type HasVehicle = ChekhVehicle<"car">;

  //
}
