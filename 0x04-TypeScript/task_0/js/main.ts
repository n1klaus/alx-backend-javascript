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

const myParagraph: HTMLElement = document.createElement('h1') as HTMLElement;
myParagraph.innerHTML = "Students Table!";
document.body.append(myParagraph);

const myTable: HTMLTableElement = document.createElement('table') as HTMLTableElement;

studentList.map((student, index) => {
	const row: HTMLTableRowElement = myTable.insertRow(index) as HTMLTableRowElement;
	const nameCell: HTMLTableCellElement = row.insertCell(0) as HTMLTableCellElement;
	nameCell.innerHTML = student.firstName;
	const locationCell: HTMLTableCellElement = row.insertCell(1) as HTMLTableCellElement;
	locationCell.innerHTML = student.location;
});
document.body.append(myTable);
