export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  class: number;
  subjects:{
    subjectName: string;
    points: number;
  }[];
}

let studentsArray: Student[] = [
  {
    id: "1",
    firstName: "Jane", 
    lastName: "Smithi", 
    age: 14, 
    class: 9, 
    subjects: [
      {
        subjectName: "Math",
        points: 80
      }
    ]
  }
]


// const studentsArray: Student[] = [
//   {
//     id: 1,
//     firstName: "Thomas",
//     lastName: "Aquinas",
//     age: 14,
//     year: 8,
//     subjects: [
//       {
//       name: "English",
//       score: 80
//       },
//       {
//       name: "Phisics",
//       score: 90
//       }
//     ],
//   },
//   {
//     id: 2,
//     firstName: "Marcel",
//     lastName: "Proust",
//     age: 15,
//     year: 9,
//     subjects: [
//       {
//       name: "Mathematics",
//       score: 80
//       },
//       {
//       name: "Phisics",
//       score: 90
//       }
//     ],
//   },
//   {
//     id: 3,
//     firstName: "Athur",
//     lastName: "Rimbaud",
//     age: 15,
//     year: 9,
//     subjects: [
//       {
//       name: "Mathematics",
//       score: 80
//       },
//       {
//       name: "English",
//       score: 90
//       }
//     ],
//   },
//   {
//     id: 4,
//     firstName: "Emanuel",
//     lastName: "Kant",
//     age: 16,
//     year: 10,
//     subjects: [
//       {
//       name: "Philosophy",
//       score: 80
//       },
//       {
//       name: "Phisics",
//       score: 90
//       }
//     ],
//   },
//   {
//     id: 5,
//     firstName: "Arthur",
//     lastName: "Schopenhauer",
//     age: 16,
//     year: 10,
//     subjects: [
//       {
//       name: "Philosophy",
//       score: 80
//       },
//       {
//       name: "Phisics",
//       score: 90
//       },
//       {
//       name: "Mathematics",
//       score: 90
//       },
//     ],
//   },
// ]

