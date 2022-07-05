"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teacher_1 = require("./teacher");
let assignStudentToTeacher = function (student) {
    teacher_1.teachers.forEach(teacher => {
        student.subjects.forEach(sub => {
            if (teacher.subjects.some((el) => el === sub.subjectName)) {
            }
        });
    });
};
let setSubjectAndPoint = function (student, subject, points) {
    if (student.subjects.every((el) => el.subjectName !== subject)) {
        student.subjects.push({ subjectName: subject, points });
    }
    else {
    }
};
