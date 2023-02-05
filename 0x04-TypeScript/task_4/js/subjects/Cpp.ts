namespace Subjects {
  interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC : number;
  }
  export const cTeacher: Teacher = null;

  class Cpp extends Subject {
    teacher: Teacher;
    constructor(teacher: Teacher) {
      super();
      this.teacher = teacher;
    };
    getRequirements(): string { return "Here is the list of requirements for Cpp"; };
    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC !== 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    };
  }
  export const cpp = new Cpp(cTeacher);
}