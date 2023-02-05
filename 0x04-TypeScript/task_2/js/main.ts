interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome(): string { return "Working from home"; };
	getCoffeeBreak(): string { return "Getting a coffee break"; };
	workDirectorTasks(): string { return "Getting to director tasks"; };
}

class Teacher implements TeacherInterface {
	workFromHome(): string { return "Cannot work from home"; };
	getCoffeeBreak(): string { return "Cannot have a break"; };
	workTeacherTasks(): string { return "Getting to work"; };
}

function createEmployee(salary: string | number): Teacher | Director {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	}
	return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));

function isDirector(employee: Teacher | Director): boolean {
	if (employee instanceof Director) {
		return true;
	}
	return false;
}

function executeWork(employee: Teacher | Director): void {
	if (isDirector(employee)) {
		console.log((employee as Director).workDirectorTasks());
	}
	else {
		console.log((employee as Teacher).workTeacherTasks());
	}
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
	if (todayClass === "Math") {
		console.log("Teaching Math");
		return "Teaching Math";
	}
	else if (todayClass === "History") {
		console.log("Teaching History");
		return "Teaching History";
	}
}

teachClass('Math');
teachClass('History');
