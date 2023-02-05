namespace Subjects {
  interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingJava?: number;
  }
  const javaTeacher: Teacher = null;

  class Java extends Subject{
    teacher: Teacher;
    constructor(teacher: Teacher) {
      super();
      this.teacher = teacher;
    };
    getRequirements(): string { return "Here is the list of requirements for Java"; };
    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava !== 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    };
  }
  export const java = new Java(javaTeacher);
}