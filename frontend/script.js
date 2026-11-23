const API_URL = 'http://localhost:3000';

let studentsArray = [];

window.addEventListener('load', () => {
    loadStudents();
});

async function loadStudents() {
    try {
        const response = await fetch(`${API_URL}/students`);
        const students = await response.json();
        studentsArray = students;
        displayStudents(students);
        updateStudentCount(students.length);
    } catch (error) {
        console.error('Error loading students:', error);
        showMessage('Failed to load students. Make sure the backend server is running.', 'danger');
    }
}

function displayStudents(students) {
    const tableBody = document.getElementById('studentsTableBody');
    const emptyState = document.getElementById('emptyState');
    
    tableBody.innerHTML = '';
    
    if (students.length === 0) {
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    
    students.forEach((student) => {
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
        
        tableBody.innerHTML += row;
    });
}

function updateStudentCount(count) {
    const countElement = document.getElementById('studentCount');
    countElement.textContent = count;
}

const studentForm = document.getElementById('studentForm');

studentForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    if (validateForm()) {
        await registerStudent();
    }
});

function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const department = document.getElementById('department').value;
    const semester = document.getElementById('semester').value;
    const gender = document.getElementById('gender').value;
    
    if (!fullName || !email || !phone || !department || !semester || !gender) {
        showMessage('Please fill in all required fields!', 'danger');
        return false;
    }
    
    if (fullName.length < 2) {
        showMessage('Please enter a valid full name!', 'danger');
        return false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showMessage('Please enter a valid email address!', 'danger');
        return false;
    }
    
    const phonePattern = /^[0-9]{10,}$/;
    const phoneDigits = phone.replace(/[-\s]/g, '');
    if (!phonePattern.test(phoneDigits)) {
        showMessage('Please enter a valid phone number (at least 10 digits)!', 'danger');
        return false;
    }
    
    return true;
}

async function registerStudent() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const department = document.getElementById('department').value;
    const semester = document.getElementById('semester').value;
    const gender = document.getElementById('gender').value;
    
    const studentData = {
        fullName: fullName,
        email: email,
        phone: phone,
        department: department,
        semester: semester,
        gender: gender
    };
    
    try {
        const response = await fetch(`${API_URL}/students`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentData)
        });
        
        const result = await response.json();
        
        if (response.ok) {
            showMessage('Student registered successfully!', 'success');
            studentForm.reset();
            loadStudents();
        } else {
            showMessage(result.message || 'Failed to register student!', 'danger');
        }
        
    } catch (error) {
        console.error('Error registering student:', error);
        showMessage('Failed to register student. Please check your connection.', 'danger');
    }
}

async function deleteStudent(studentId) {
    const confirmed = confirm('Are you sure you want to delete this student?');
    
    if (!confirmed) {
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/students/${studentId}`, {
            method: 'DELETE'
        });
        
        const result = await response.json();
        
        if (response.ok) {
            showMessage('Student deleted successfully!', 'success');
            loadStudents();
        } else {
            showMessage(result.message || 'Failed to delete student!', 'danger');
        }
        
    } catch (error) {
        console.error('Error deleting student:', error);
        showMessage('Failed to delete student. Please check your connection.', 'danger');
    }
}

function showMessage(message, type) {
    const messageContainer = document.getElementById('messageContainer');
    
    const alertDiv = `
        <div class="alert alert-${type}" role="alert">
            ${message}
        </div>
    `;
    
    messageContainer.innerHTML = alertDiv;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
        messageContainer.innerHTML = '';
    }, 5000);
}
