namespace Subjects {
  interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingReact?: number;
  }
  const reactTeacher: Teacher = null;

  class React extends Subject{
    teacher: Teacher;
    constructor(teacher: Teacher) {
      super();
      this.teacher = teacher;
    };
    getRequirements(): string { return "Here is the list of requirements for React"; };
    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact !== 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    };
  }
  export const react = new React(reactTeacher);
}