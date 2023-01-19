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
export class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}
export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak() {
    return "Cannot have a break";
  }
  workTeacherTasks() {
    return "Getting to work";
  }
}
export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
}
// test
// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee('$500'));

export function isDirector(employee: DirectorInterface | TeacherInterface):  employee is Director {
  return employee.workFromHome() === 'Working from home';
}
export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (isDirector(employee)) return employee.workDirectorTasks();
  return employee.workTeacherTasks();
}
//test
// executeWork(createEmployee(200));
// executeWork(createEmployee(1000));


// https://www.typescriptlang.org/docs/handbook/literal-types.html

type Subjects = 'Math' | 'History';
export function teachClass(todayClass:Subjects): string {
  if(todayClass === 'Math')
      return 'Teaching Math';
  else if (todayClass === 'History')
      return 'Teaching History';
}
// test
// console.log(teachClass('Math'));
// console.log(teachClass('History'));