interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  subjects: string[];
  classes: {
    studentsList: string[];
    studentsCount: number;
  }[];
}

export const teachers: Teacher[] = [
  {
    id: 1,
    firstName: "Merab",
    lastName: "Mamardashvili",
    age: 55,
    email: "mamardashvili@example.com",
    subjects: [
      "Mathematics",
      "Phisics"
    ],
    classes: [{
      studentsList: [],
      studentsCount: 0,
    }],
  },
  {
    id: 2,
    firstName: "Friedrich",
    lastName: "Nietszche",
    age: 65,
    email: "abyss@example.com",
    subjects: [
      "English"
    ],
    classes: [{
      studentsList: [],
      studentsCount: 0,
    }],
  },
  {
    id: 1,
    firstName: "Soren",
    lastName: "Kierkegaard",
    age: 50,
    email: "denyingthetechnology@example.com",
    subjects: [
      "Politics"
    ],
    classes: [{
      studentsList: [],
      studentsCount: 0,
    }],
  },
  {
    id: 1,
    firstName: "Georg Wilhelm Friedrich",
    lastName: "Hegel",
    age: 50,
    email: "Hegel@example.com",
    subjects: [
      "Philosophy"
    ],
    classes: [{
      studentsList: [],
      studentsCount: 0,
    }],
  },

]