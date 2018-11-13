import { Teacher } from "./Teacher";

export class Student {

  learn() { }

  question(teacher: Teacher) {
    teacher.answer();
  }
}