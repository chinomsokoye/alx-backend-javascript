const fs = require('fs');

function countStudents(database) {
  let students = [];
  const StudentGroup = {};
  const studentObject = [];

  try {
    students = fs.readFileSync(database, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  students = students.split('\n');
  const header = students.shift().split(',');

  students.forEach((element) => {
    if (element) {
      const studentInfo = element.split(',');

      header.forEach((header, index) => {
        studentObject[header] = studentInfo[index];
	if (header === 'field') {
	  if (StudentGroup[studentInfo[index]]) {
            StudentGroup[studentInfo[index]].push(studentObject.firstname);
	  } else {
	    StudentGroup[studentInfo[index]] = [studentObject.firstname];
	  }
	}
      });
      studentObject.push(studentObject);
    }
  });
  console.log(`Number of students: ${studentObject.length}`);

  for (const info in StudentGroup) {
    if (StudentGroup[info]) {
      const listStudents = StudentGroup[info];
      console.log(`Number of students in ${info}: ${listStudents.length}. List: ${listStudents.join(', ')}`);
    }
  }
}

module.exports = countStudents;
