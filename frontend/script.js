// ========================================
// Global Variables
// ========================================

// Backend API URL - Change this if your backend runs on a different port
const API_URL = 'http://localhost:3000';

// Array to store students data
let studentsArray = [];

// ========================================
// Load Students When Page Opens
// ========================================

// This function runs automatically when the page loads
window.addEventListener('load', () => {
    loadStudents();
});

// ========================================
// Load All Students from Backend
// ========================================

// Async function to fetch students from the backend
async function loadStudents() {
    try {
        // Make GET request to backend API
        const response = await fetch(`${API_URL}/students`);
        
        // Convert response to JSON
        const students = await response.json();
        
        // Store students in global array
        studentsArray = students;
        
        // Display students on page
        displayStudents(students);
        
        // Update dashboard count
        updateStudentCount(students.length);
        
    } catch (error) {
        // Show error message if request fails
        console.error('Error loading students:', error);
        showMessage('Failed to load students. Make sure the backend server is running.', 'danger');
    }
}

// ========================================
// Display Students in Table
// ========================================

// Function to display students using DOM manipulation
function displayStudents(students) {
    // Get table body element
    const tableBody = document.getElementById('studentsTableBody');
    const emptyState = document.getElementById('emptyState');
    
    // Clear existing content
    tableBody.innerHTML = '';
    
    // Check if there are no students
    if (students.length === 0) {
        emptyState.style.display = 'block';
        return;
    }
    
    // Hide empty state
    emptyState.style.display = 'none';
    
    // Loop through each student and create table row
    students.forEach((student) => {
        // Create table row using template literals
        const row = `
            <tr>
                <td>${student.id}</td>
                <td>${student.fullName}</td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
                <td>${student.department}</td>
                <td>${student.semester}</td>
                <td>${student.gender}</td>
                <td>
                    <button class="btn-delete" onclick="deleteStudent('${student.id}')">
                        Delete
                    </button>
                </td>
            </tr>
        `;
        
        // Add row to table body
        tableBody.innerHTML += row;
    });
}

// ========================================
// Update Student Count in Dashboard
// ========================================

// Simple function to update the count display
function updateStudentCount(count) {
    const countElement = document.getElementById('studentCount');
    countElement.textContent = count;
}

// ========================================
// Form Submit Event Handler
// ========================================

// Get form element
const studentForm = document.getElementById('studentForm');

// Add event listener for form submission
studentForm.addEventListener('submit', async (event) => {
    // Prevent default form submission
    event.preventDefault();
    
    // Validate form before submitting
    if (validateForm()) {
        // If validation passes, register the student
        await registerStudent();
    }
});

// ========================================
// Form Validation Function
// ========================================

// Function to validate all form fields
function validateForm() {
    // Get form input values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const department = document.getElementById('department').value;
    const semester = document.getElementById('semester').value;
    const gender = document.getElementById('gender').value;
    
    // Check if any field is empty
    if (!fullName || !email || !phone || !department || !semester || !gender) {
        showMessage('Please fill in all required fields!', 'danger');
        return false;
    }
    
    // Validate full name (should contain at least 2 characters)
    if (fullName.length < 2) {
        showMessage('Please enter a valid full name!', 'danger');
        return false;
    }
    
    // Validate email format using regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showMessage('Please enter a valid email address!', 'danger');
        return false;
    }
    
    // Validate phone number (should contain at least 10 digits)
    const phonePattern = /^[0-9]{10,}$/;
    const phoneDigits = phone.replace(/[-\s]/g, ''); // Remove dashes and spaces
    if (!phonePattern.test(phoneDigits)) {
        showMessage('Please enter a valid phone number (at least 10 digits)!', 'danger');
        return false;
    }
    
    // All validations passed
    return true;
}

// ========================================
// Register New Student
// ========================================

// Async function to register a new student
async function registerStudent() {
    // Get form input values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const department = document.getElementById('department').value;
    const semester = document.getElementById('semester').value;
    const gender = document.getElementById('gender').value;
    
    // Create student object
    const studentData = {
        fullName: fullName,
        email: email,
        phone: phone,
        department: department,
        semester: semester,
        gender: gender
    };
    
    try {
        // Make POST request to backend API
        const response = await fetch(`${API_URL}/students`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentData)
        });
        
        // Get response data
        const result = await response.json();
        
        // Check if registration was successful
        if (response.ok) {
            // Show success message
            showMessage('Student registered successfully!', 'success');
            
            // Clear the form
            studentForm.reset();
            
            // Reload students list
            loadStudents();
        } else {
            // Show error message
            showMessage(result.message || 'Failed to register student!', 'danger');
        }
        
    } catch (error) {
        // Show error message if request fails
        console.error('Error registering student:', error);
        showMessage('Failed to register student. Please check your connection.', 'danger');
    }
}

// ========================================
// Delete Student Function
// ========================================

// Async function to delete a student
async function deleteStudent(studentId) {
    // Confirm before deleting
    const confirmed = confirm('Are you sure you want to delete this student?');
    
    if (!confirmed) {
        return; // Exit if user cancels
    }
    
    try {
        // Make DELETE request to backend API
        const response = await fetch(`${API_URL}/students/${studentId}`, {
            method: 'DELETE'
        });
        
        // Get response data
        const result = await response.json();
        
        // Check if deletion was successful
        if (response.ok) {
            // Show success message
            showMessage('Student deleted successfully!', 'success');
            
            // Reload students list
            loadStudents();
        } else {
            // Show error message
            showMessage(result.message || 'Failed to delete student!', 'danger');
        }
        
    } catch (error) {
        // Show error message if request fails
        console.error('Error deleting student:', error);
        showMessage('Failed to delete student. Please check your connection.', 'danger');
    }
}

// ========================================
// Show Success/Error Messages
// ========================================

// Function to display messages to the user
function showMessage(message, type) {
    // Get message container
    const messageContainer = document.getElementById('messageContainer');
    
    // Create alert div using template literals
    const alertDiv = `
        <div class="alert alert-${type}" role="alert">
            ${message}
        </div>
    `;
    
    // Add alert to container
    messageContainer.innerHTML = alertDiv;
    
    // Scroll to top to show message
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageContainer.innerHTML = '';
    }, 5000);
}

// ========================================
// End of JavaScript Code
// ========================================
