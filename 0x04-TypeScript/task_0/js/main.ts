interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Zoro", 
	lastName: "Ronoroa",
	age: 27,
	location: "East Blue"
};
const student2: Student = {
	firstName: "Sanji",
	lastName: "Vinsmoke",
	age: 26,
	location: "West Blue"
};
const studentList = [student1, student2];

const div: HTMLElement = <HTMLElement>document.getElementById('root');
const myTable: HTMLTableElement = <HTMLTableElement>div.createElement('table');
studentList.map((student, index) => {
	key = index;
	const row: HTMLTableRowElement = <HTMLTableRowElement>myTable.insertRow(index);
	const nameCell = row.insertCell(0);
	nameCell.innerHTML = student.firstName;
	const locationCell = row.insertCell(1);
	locationCell.innerHTML = student.location;
});
