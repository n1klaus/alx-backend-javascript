import { cpp, cTeacher } from './subjects/Cpp.ts';
import { java } from './subjects/Java.ts';
import { react } from './subjects/React.ts';

cTeacher.experienceTeachingC = 10;

console.log("C++");
const cppSubject = cpp.setTeacher(cTeacher);
console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());

console.log("Java");
const javaSubject = java.setTeacher(cTeacher);
console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());

console.log("React");
const reactSubject = react.setTeacher(cTeacher);
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());
