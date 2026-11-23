const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const studentsFilePath = path.join(__dirname, 'students.json');

function readStudentsFromFile() {
    try {
        if (!fs.existsSync(studentsFilePath)) {
            return [];
        }
        
        const fileData = fs.readFileSync(studentsFilePath, 'utf-8');
        const students = JSON.parse(fileData);
        return students;
        
    } catch (error) {
        console.error('Error reading file:', error);
        return [];
    }
}

function writeStudentsToFile(students) {
    try {
        const jsonData = JSON.stringify(students, null, 2);
        fs.writeFileSync(studentsFilePath, jsonData, 'utf-8');
        return true;
    } catch (error) {
        console.error('Error writing file:', error);
        return false;
    }
}

function generateStudentId() {
    const students = readStudentsFromFile();
    
    if (students.length === 0) {
        return 'STD001';
    }
    
    const lastStudent = students[students.length - 1];
    const lastId = lastStudent.id;
    const lastNumber = parseInt(lastId.substring(3));
    const newNumber = lastNumber + 1;
    const newId = 'STD' + String(newNumber).padStart(3, '0');
    
    return newId;
}

app.get('/students', (req, res) => {
    try {
        const students = readStudentsFromFile();
        res.status(200).json(students);
    } catch (error) {
        console.error('Error in GET /students:', error);
        res.status(500).json({ 
            message: 'Failed to retrieve students',
            error: error.message 
        });
    }
});

app.post('/students', (req, res) => {
    try {
        const { fullName, email, phone, department, semester, gender } = req.body;
        
        if (!fullName || !email || !phone || !department || !semester || !gender) {
            return res.status(400).json({ 
                message: 'All fields are required!' 
            });
        }
        
        const students = readStudentsFromFile();
        
        const emailExists = students.find(student => student.email === email);
        if (emailExists) {
            return res.status(400).json({ 
                message: 'Email already registered!' 
            });
        }
        
        const studentId = generateStudentId();
        
        const newStudent = {
            id: studentId,
            fullName: fullName,
            email: email,
            phone: phone,
            department: department,
            semester: semester,
            gender: gender,
            registeredDate: new Date().toISOString()
        };
        
        students.push(newStudent);
        
        const saved = writeStudentsToFile(students);
        
        if (saved) {
            res.status(201).json({
                message: 'Student registered successfully!',
                student: newStudent
            });
        } else {
            res.status(500).json({ 
                message: 'Failed to save student data' 
            });
        }
        
    } catch (error) {
        console.error('Error in POST /students:', error);
        res.status(500).json({ 
            message: 'Failed to register student',
            error: error.message 
        });
    }
});

app.delete('/students/:id', (req, res) => {
    try {
        const studentId = req.params.id;
        const students = readStudentsFromFile();
        const studentIndex = students.findIndex(student => student.id === studentId);
        
        if (studentIndex === -1) {
            return res.status(404).json({ 
                message: 'Student not found!' 
            });
        }
        
        const deletedStudent = students.splice(studentIndex, 1);
        const saved = writeStudentsToFile(students);
        
        if (saved) {
            res.status(200).json({
                message: 'Student deleted successfully!',
                student: deletedStudent[0]
            });
        } else {
            res.status(500).json({ 
                message: 'Failed to delete student' 
            });
        }
        
    } catch (error) {
        console.error('Error in DELETE /students/:id:', error);
        res.status(500).json({ 
            message: 'Failed to delete student',
            error: error.message 
        });
    }
});

app.listen(PORT, () => {
    console.log('========================================');
    console.log('Student Management System - Backend API');
    console.log('========================================');
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('API Endpoints:');
    console.log(`  GET    http://localhost:${PORT}/students`);
    console.log(`  POST   http://localhost:${PORT}/students`);
    console.log(`  DELETE http://localhost:${PORT}/students/:id`);
    console.log('========================================');
});
