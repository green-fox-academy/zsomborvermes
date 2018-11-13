import { Student } from "./Student";

export class Teacher {

  teach(student: Student): void {
    student.learn();
  }
  answer(): void { }
}