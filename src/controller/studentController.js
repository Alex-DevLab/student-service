import * as repo from '../repository/studentRepository.js'

export const addStudent = (req, res) => {
    const success = repo.addStudent(req.body);
    if (success) {
        res.status(204).send();
    } else {
        res.status(409).send();
    }
}

export const findStudent = (req, res) => {
    const student = repo.findStudent(+req.params.id);
    console.log(student);
    if (student) {
        const {password, ...studentWithoutPassword} = student;
        console.log(studentWithoutPassword);
        res.json(studentWithoutPassword);
    } else {
        res.status(404).send();
    }
}

export const deleteStudent = (req, res) => {
    const student = repo.deleteStudent(+req.params.id);
    if (student) {
        const {password, ...studentWithoutPassword} = student;
        res.json(studentWithoutPassword);
    } else {
        res.status(404).send();
    }
}

export const updateStudent = (req, res) => {
    const student = repo.updateStudent(+req.params.id, req.body);
    if (student) {
        const {scores, ...studentWithoutScores} = student;
        res.json(studentWithoutScores);
    } else {
        res.status(404).send();
    }
}

export const addScore = (req, res) => {
    const result = repo.addScore(+req.params.id, req.body.examName, req.body.score);
    if (result) {
        res.status(204).send(result);
    } else {
        res.status(404).send("Student not found");
    }
}

export const findByName = (req, res) => {
    const students = repo.findByName(req.params.name);
    if (students) {
        res.status(200).send(students);
    } else {
        res.status(404).send("Student not found");
    }
}

export const countByNames = (req, res) => {
    const count = repo.countByNames(req.query.names);
    if (count) {
        res.status(200).send(count);
    } else {
        res.status(404).send();
    }
}

export const findByMinScore = (req, res) => {
    const students = repo.findByMinScore(req.params.exam, req.params.minScore);
    if (students) {
        res.status(200).send(students);
    } else {
        res.status(404).send();
    }
}