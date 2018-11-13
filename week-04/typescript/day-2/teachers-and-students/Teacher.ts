import { Student } from "./Student";

export class Teacher {

  teach(student: Student) {
    student.learn();
  }
  answer() { }
}