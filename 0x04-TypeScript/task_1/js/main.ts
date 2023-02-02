interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: boolean;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction;
printTeacher = (firstName: string, lastName: string): string => {
	return `${firstName.toUpperCase().charAt(0)}. ${lastName}`
}

interface StudentClassInterface {
	constructor(firstName: string, lastName: string): void;
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements StudentClassInterface {
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework() { return "Currently working"; }
	displayName() { return this.firstName; }
}
