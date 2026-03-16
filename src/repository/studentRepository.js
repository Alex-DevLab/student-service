import {Student} from "../model/student.js";

const students = new Map();

export const addStudent = ({id, name, password}) => {
    if (students.has(id)) {
        return false;
    }

    students.set(id, new Student(id, name, password));
    return true;
}

export const findStudent = (id) => students.get(id);

export const deleteStudent = (id) => {
    const student = students.get(id);
    if (student) {
        students.delete(id);
        return student;
    }
}

export const updateStudent = (id, data) => {
    const student = students.get(id);
    if (student) {
        // students.set(id, {...student, ...data})
        // return students.get(id);

        Object.assign(student, data);
        return student;
    }
}

export const addScore = (id, exam, score) => {
    const student = findStudent(id);
    if (student) {
        student.scores[exam] = score;
        return true;
    } else {
        return false;
    }
}

export const findByName = (name) => {
    const studentsArray = [];
    students.forEach((student) => {
        if (student.name.toLowerCase() === name.toLowerCase()) {
            studentsArray.push(student);
        }
    });
    return studentsArray;
}

export const countByNames = (names) => {
    let count = 0;
    students.forEach((student) => {
        for (let i = 0; i < names.length; i++) {
            if (student.name === names[i]) {
                count++;
            }
        }
    })
    return count;
}

export const findByMinScore = (exam, minScore) => {
    const studentsArray = [];
    students.forEach((student) => {
        const scores = Object.entries(student.scores)
        for (let i = 0; i < scores.length; i++) {
            if (scores[i][0] === exam && scores[i][1] >= minScore) {
                studentsArray.push(student);
            }
        }
    })
    return studentsArray;
}