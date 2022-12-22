export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (!Array.isArray(students)) throw TypeError('Students must be an array');
    students.forEach((student) => {
      if (typeof student !== 'string') throw TypeError('Student must be a string');
    });
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('Name must be a string');
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') throw TypeError('Length must be a number');
    this._length = newLength;
  }

  get length() {
    return this._length;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) throw TypeError('Students must be an array');
    newStudents.forEach((student) => {
      if (typeof student !== 'string') throw TypeError('Student must be a string');
    });
    this._students = newStudents;
  }

  get students() {
    return this._students;
  }
}
