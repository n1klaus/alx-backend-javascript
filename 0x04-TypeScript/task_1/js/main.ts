interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: boolean;
}

// const teacher3: Teacher = {
//   firstName: 'John',
//   fullTimeEmployee: false,
//   lastName: 'Doe',
//   location: 'London',
//   contract: false,
// };

// console.log(teacher3);

interface Directors extends Teacher {
	numberOfReports: number;
}

// const director1: Directors = {
//   firstName: 'John',
//   lastName: 'Doe',
//   location: 'London',
//   fullTimeEmployee: true,
//   numberOfReports: 17,
// };
// console.log(director1);

interface PrintTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = 
	(firstName: string, lastName: string): string => {
	const result = `${firstName.toUpperCase().charAt(0)}. ${lastName}`;
	console.log(result);
	return result;
}

printTeacher("John", "Doe");

interface StudentClassContructor {
	(firstName: string, lastName: string): void;
}

interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements StudentClassInterface{
	firstName: string;
	lastName: string;
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework(): string { return "Currently working"; }
	displayName(): string { return this.firstName; }
}

const student: StudentClass = new StudentClass("Jane", "Doe");
console.log(student);
console.log(student.workOnHomework());
console.log(student.displayName());
