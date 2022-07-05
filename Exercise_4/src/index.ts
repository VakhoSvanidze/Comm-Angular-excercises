import { Student } from "./students";
import { teachers } from "./teacher";


let assignStudentToTeacher = function (student: Student) {
  teachers.forEach(teacher => {
    student.subjects.forEach(sub => {
      if(teacher.subjects.some((el) => el === sub.subjectName)){

      }
    })
  })
}

let setSubjectAndPoint = function (
  student: Student,
  subject: string, 
  points: number
) {
  if( student.subjects.every((el) => el.subjectName !== subject)) {
    student.subjects.push({ subjectName: subject, points });
  } else {
    
  }
}