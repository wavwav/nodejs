class Ro {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  notRoArray = (): string[] => {
    const array: string[] = [];
    array.push(this.name);
    return array;
  };

  roArray = (): ReadonlyArray<string> => {
    const array: string[] = [];
    array.push(this.name);
    const returnArray: ReadonlyArray<string> = array;
    // 普通に代入は無理。型アサーションするとできる
    const ar2: string[] = returnArray as string[];
    // const ar3: string[] = -readonly returnArray;
    return returnArray;
  };
}

const test = new Ro("test");

//console.log(test);

console.log(test.notRoArray().unshift("aa"));
console.log(test.roArray());

Array<>();
