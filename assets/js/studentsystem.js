const students = [
    {
    firstName: 'Pelin',
    lastName: 'Ergül',
    studentNo: createUniqueNumber(),
    lessons: [],
    parentId: 1
  }
];

const parents = [
    {
        id: 1,
        firstName: 'Gülay',
        lastName: 'Ergül',
    },
    {
        id: 2,
        firstName: 'Bekir',
        lastName: 'Ergül',
    }
];

function findParent(id) {
    for (const parent of parents) {
        if(parent.id === id) {
            const result = students.filter(student => student.parentId === id)
            result.forEach((element) => {
                console.log(parent.firstName, parent.lastName, ':', element.firstName, element.lastName);
            });
            return 'FindParent Çalıştı'
        }
    }
}

function foundStudent(firstName) {
    for (const student of students) {
        if (student.firstName === firstName) {
            console.log(student.firstName, student.lastName, student.studentNo);
        }
    }
}

function createUniqueNumber() {
    const date = new Date()
    const dateYears = date.getFullYear()
    const dateMonth = date.getMonth() + 1
    const dateDay = date.getDate()
    const fullDate = `${dateDay}${dateMonth}${dateYears}`

    return fullDate + Math.floor(Math.random() * 10000)
}

function addStudent(firstName, lastName, lesson = [], parentId) {
    students.push(
      {
        firstName: firstName, 
        lastName: lastName, 
        studentNo: createUniqueNumber(),
        lesson: lesson,
        parentId: parentId ? parentId : parentId + 1
      }
    );
    return 'Öğrenci Eklendi'
}

function listStudent() { 
    if (students.length <= 0) {
        return console.error('Öğrenci Yok Öğrenci Eklemek için addStudent() çalıştır')
    }

    for (const student of students) {
        console.log(`Student No: ${student.studentNo} | İsim: ${student.firstName} | Soyad: ${student.lastName} | Dersleri: ${student.lesson} | Ebeveyn: ${student.parentId}`);
    }

    return 'Öğrenciler Listelendi'
}