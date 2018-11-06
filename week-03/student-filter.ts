'use strict';
export { };

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function studentsWithMoreThan4Candies(students: any[]): void {
  let nameOfStudents: string = "These are the students with more than 4 candies: ";
  for (let student of students) {
    if (student.candies > 4) {
      nameOfStudents += student.name + ', ';
    }
  }

  console.log(nameOfStudents.slice(0, nameOfStudents.length - 2));
}

studentsWithMoreThan4Candies(students);

function avgCandies(students: any[]): void {
  let sumOfCandies = 0;
  for (let student of students) {
    sumOfCandies += student.candies;
  }

  console.log(`Number of candies on average per student: ${sumOfCandies / students.length} candies`);
}

avgCandies(students);