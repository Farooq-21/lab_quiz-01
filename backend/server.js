// ========================================
// Import Required Modules
// ========================================

// Import Express framework
const express = require('express');

// Import CORS to allow frontend to communicate with backend
const cors = require('cors');

// Import file system module to read/write files
const fs = require('fs');

// Import path module to handle file paths
const path = require('path');

// ========================================
// Initialize Express App
// ========================================

// Create Express application
const app = express();

// Define port number
const PORT = 3000;

// ========================================
// Middleware Configuration
// ========================================

// Enable CORS to allow requests from frontend
app.use(cors());

// Enable JSON parsing for request body
app.use(express.json());

// ========================================
// File Path for JSON Storage
// ========================================

// Path to students.json file
const studentsFilePath = path.join(__dirname, 'students.json');

// ========================================
// Helper Function: Read Students from File
// ========================================

// Function to read all students from JSON file
function readStudentsFromFile() {
    try {
        // Check if file exists
        if (!fs.existsSync(studentsFilePath)) {
            // If file doesn't exist, return empty array
            return [];
        }
        
        // Read file content
        const fileData = fs.readFileSync(studentsFilePath, 'utf-8');
        
        // Parse JSON and return array
        const students = JSON.parse(fileData);
        return students;
        
    } catch (error) {
        // If error occurs, log it and return empty array
        console.error('Error reading file:', error);
        return [];
    }
}

// ========================================
// Helper Function: Write Students to File
// ========================================

// Function to write students array to JSON file
function writeStudentsToFile(students) {
    try {
        // Convert array to JSON string with proper formatting
        const jsonData = JSON.stringify(students, null, 2);
        
        // Write to file
        fs.writeFileSync(studentsFilePath, jsonData, 'utf-8');
        
        return true;
        
    } catch (error) {
        // If error occurs, log it
        console.error('Error writing file:', error);
        return false;
    }
}

// ========================================
// Helper Function: Generate Student ID
// ========================================

// Function to generate unique student ID
function generateStudentId() {
    // Read existing students
    const students = readStudentsFromFile();
    
    // If no students exist, start with STD001
    if (students.length === 0) {
        return 'STD001';
    }
    
    // Get last student ID
    const lastStudent = students[students.length - 1];
    const lastId = lastStudent.id;
    
    // Extract number from ID (e.g., STD001 -> 001)
    const lastNumber = parseInt(lastId.substring(3));
    
    // Increment number
    const newNumber = lastNumber + 1;
    
    // Format new ID with leading zeros (e.g., 2 -> 002)
    const newId = 'STD' + String(newNumber).padStart(3, '0');
    
    return newId;
}

// ========================================
// API Endpoint: GET all students
// ========================================

// Route to get all students
app.get('/students', (req, res) => {
    try {
        // Read students from file
        const students = readStudentsFromFile();
        
        // Send students array as response
        res.status(200).json(students);
        
    } catch (error) {
        // Send error response
        console.error('Error in GET /students:', error);
        res.status(500).json({ 
            message: 'Failed to retrieve students',
            error: error.message 
        });
    }
});

// ========================================
// API Endpoint: POST new student
// ========================================

// Route to register a new student
app.post('/students', (req, res) => {
    try {
        // Get student data from request body
        const { fullName, email, phone, department, semester, gender } = req.body;
        
        // Validate required fields
        if (!fullName || !email || !phone || !department || !semester || !gender) {
            return res.status(400).json({ 
                message: 'All fields are required!' 
            });
        }
        
        // Read existing students
        const students = readStudentsFromFile();
        
        // Check if email already exists
        const emailExists = students.find(student => student.email === email);
        if (emailExists) {
            return res.status(400).json({ 
                message: 'Email already registered!' 
            });
        }
        
        // Generate unique student ID
        const studentId = generateStudentId();
        
        // Create new student object
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
        
        // Add new student to array
        students.push(newStudent);
        
        // Save updated array to file
        const saved = writeStudentsToFile(students);
        
        if (saved) {
            // Send success response
            res.status(201).json({
                message: 'Student registered successfully!',
                student: newStudent
            });
        } else {
            // Send error response
            res.status(500).json({ 
                message: 'Failed to save student data' 
            });
        }
        
    } catch (error) {
        // Send error response
        console.error('Error in POST /students:', error);
        res.status(500).json({ 
            message: 'Failed to register student',
            error: error.message 
        });
    }
});

// ========================================
// API Endpoint: DELETE student by ID
// ========================================

// Route to delete a student
app.delete('/students/:id', (req, res) => {
    try {
        // Get student ID from URL parameter
        const studentId = req.params.id;
        
        // Read existing students
        const students = readStudentsFromFile();
        
        // Find student index in array
        const studentIndex = students.findIndex(student => student.id === studentId);
        
        // Check if student exists
        if (studentIndex === -1) {
            return res.status(404).json({ 
                message: 'Student not found!' 
            });
        }
        
        // Remove student from array
        const deletedStudent = students.splice(studentIndex, 1);
        
        // Save updated array to file
        const saved = writeStudentsToFile(students);
        
        if (saved) {
            // Send success response
            res.status(200).json({
                message: 'Student deleted successfully!',
                student: deletedStudent[0]
            });
        } else {
            // Send error response
            res.status(500).json({ 
                message: 'Failed to delete student' 
            });
        }
        
    } catch (error) {
        // Send error response
        console.error('Error in DELETE /students/:id:', error);
        res.status(500).json({ 
            message: 'Failed to delete student',
            error: error.message 
        });
    }
});

// ========================================
// Start Server
// ========================================

// Start the server and listen on specified port
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

// ========================================
// End of Server Code
// ========================================
