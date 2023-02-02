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
	workFromHome = () => "Working from home";
	getCoffeeBreak = () => "Getting a coffee break";
	workDirectorTasks = () => "Getting to director tasks";
}

class Teacher implements TeacherInterface {
	workFromHome = () => "Cannot work from home";
	getCoffeeBreak = () => "Cannot have a coffee break";
	workTeacherTasks = () => "Getting to work";
}

function createEmployee(salary: string | number): Teacher | Director {
	if (typeof salary === number && salary < 500) {
		return new Teacher();
	}
	return new Director();
}

type Predicate = (employee: unknown) => boolean;
type isDirector = ReturnType<Predicate>;

function executeWork(employee: Teacher | Director): void {
	if (isDirector(employee)) {
		employee.workDirectorTasks();
	}
	else {
		employee.workTeacherTasks();
	}
}

string Subjects = "Math" | "History";

function teachClass(todayClass) {
	if (todayClass === "Math") {
		return "Teaching Math";
	}
	else if (todayClass === "History") {
		return "Teaching History";
	}
}


