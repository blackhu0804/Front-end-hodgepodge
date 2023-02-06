interface IPerson {
  age: number;
}

function fn1<T extends IPerson>(p: T) {}

fn1({ a: 1, age: 1 });

interface Person {
  name: string;
  age: number;
}

class Teacher {
  constructor(private info: Person) {}

  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}

// const teacher = new Teacher({
//   name: "black",
//   age: 17,
// });

// teacher.getInfo("age");
