import { Teacher } from "./Teacher";

export class Student {

  learn(): void { }

  question(teacher: Teacher): void {
    teacher.answer();
  }
}