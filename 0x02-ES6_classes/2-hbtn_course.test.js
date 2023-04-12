import HolbertonCourse from './2-hbtn_course.js';
// import expect from "jest";

test('holbertonCourse is implemented correctly', () => {
  const course = new HolbertonCourse('PHP', 20, ['Lucie', 'Guillaume']);
  expect(course.name).toBe('PHP');
  expect(course).toHaveLength(20);
  expect(course.students).toStrictEqual(['Lucie', 'Guillaume']);
});
