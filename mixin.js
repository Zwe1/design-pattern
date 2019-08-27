class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = "male";
  }
}

let Clark = new Person("Clark", "Kent");

class SuperHero extends Person {
  constructor(firstName, lastName, powers) {
    super(firstName, lastName);
    this.powers = powers;
  }
}

let Superman = new SuperHero("Clark", "Kent", ["fight", "fly"]);

console.log("superman", Superman);

class Mixins {
  moveup() {
    console.log("move up");
  }
  movedown() {
    console.log("move down");
  }
}

class UseMix extends Mixins {
  intro() {
    console.log("used mixins");
    return this;
  }
}

const o = new UseMix();

o.intro().moveup();
