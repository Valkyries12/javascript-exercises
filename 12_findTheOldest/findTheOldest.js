const findTheOldest = function(persons) {

    let mayor = {
        name: "",
        age: 0,
    };
    let max = 0;
    let age;
    for(let i = 0; i < persons.length; i++) {
      if(persons[i].yearOfDeath) {
        age = persons[i].yearOfDeath - persons[i].yearOfBirth;
      } else {
        age = new Date().getFullYear() - persons[i].yearOfBirth;
      };
        
        if(age > max) {
            max = age;
            mayor.name = persons[i].name;
            mayor.age = max;
        }
    }

    return mayor
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

findTheOldest(people);

module.exports = findTheOldest;
