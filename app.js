let person = {
  firstname: "Halil",
  lastName: "Özcan",
  age: 35,
  natiolality: ["Turkey", "Sweden"],
  civilStatus: "Married",
  occupation: "FullStack Web developer",
  printInfo: function () {
    console.log(
      `${this.firstname} ${this.lastName} is ${this.age} years old and ${this.civilStatus}.`
    );
  },
};

let printOccupation = function () {
  console.log(`${this.firstname} ${this.lastName} is ${this.occupation}.`);
};

person.printInfo();
printOccupation.call(person);

let people = [
  {
    firstname: "Hasan",
    lastName: "San",
    age: 55,
    natiolality: ["Turkey"],
    civilStatus: "Single",
    occupation: "Engineer",
  },
  {
    firstname: "hakan",
    lastName: "San",
    age: 2,
    natiolality: ["Turkey"],
    civilStatus: "Single",
    occupation: "baby",
  },
  {
    firstname: "kamil",
    lastName: "San",
    age: 15,
    natiolality: ["Turkey"],
    civilStatus: "Single",
    occupation: "student",
  },
];

people.forEach((p) => {
  printOccupation.call(p);
  person.printInfo.call(p);
});
