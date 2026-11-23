# Student Management System

A complete full-stack web application for managing student records with a professional user interface.

## 🎯 Features

- ✅ Student Registration with Form Validation
- ✅ View All Registered Students
- ✅ Delete Students
- ✅ Real-time Dashboard with Student Count
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Professional UI with Dark Maroon Theme
- ✅ REST API Backend
- ✅ JSON File Storage

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- File System (fs) for JSON storage

## 📁 Project Structure

```
student-management-system/
│
├── frontend/
│   ├── index.html          # Main HTML file
│   ├── style.css           # Custom CSS styling
│   └── script.js           # JavaScript for frontend logic
│
├── backend/
│   ├── server.js           # Express server and API endpoints
│   ├── students.json       # JSON file for data storage
│   └── package.json        # Node.js dependencies
│
└── README.md               # Project documentation
```

## 🚀 Installation and Setup

### Step 1: Open Project in VS Code

1. Open VS Code
2. Click on **File > Open Folder**
3. Navigate to and select the **Lab Quiz** folder
4. Click **Select Folder**

### Step 2: Install Node.js Dependencies

1. Open VS Code Terminal: **View > Terminal** (or press `` Ctrl+` ``)
2. Navigate to backend folder:
   ```powershell
   cd backend
   ```
3. Install Express and CORS:
   ```powershell
   npm install
   ```

### Step 3: Start the Backend Server

While in the backend folder, run:
```powershell
npm start
```

You should see:
```
========================================
Student Management System - Backend API
========================================
Server is running on http://localhost:3000
API Endpoints:
  GET    http://localhost:3000/students
  POST   http://localhost:3000/students
  DELETE http://localhost:3000/students/:id
========================================
```

**Important:** Keep this terminal running. Do not close it.

### Step 4: Open the Frontend

1. Open File Explorer and navigate to: `Lab Quiz/frontend/`
2. Right-click on **index.html**
3. Select **Open with > Google Chrome** (or your preferred browser)

Alternatively, you can:
- Right-click on `index.html` in VS Code and select **Open with Live Server** (if you have Live Server extension installed)
- Or simply double-click `index.html` to open in your default browser

## 📡 API Endpoints

### 1. GET all students
- **URL:** `http://localhost:3000/students`
- **Method:** GET
- **Response:** Array of all students

### 2. POST new student
- **URL:** `http://localhost:3000/students`
- **Method:** POST
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "fullName": "Ahmed Ali",
    "email": "ahmed@example.com",
    "phone": "03001234567",
    "department": "Computer Science",
    "semester": "5",
    "gender": "Male"
  }
  ```
- **Response:** Success message with student data

### 3. DELETE student
- **URL:** `http://localhost:3000/students/STD001`
- **Method:** DELETE
- **Response:** Success message

## 🧪 Testing with Postman

### Test 1: GET All Students

1. Open Postman
2. Create a new request
3. Set method to **GET**
4. Enter URL: `http://localhost:3000/students`
5. Click **Send**
6. Expected Response: `200 OK` with array of students

### Test 2: POST New Student

1. Create a new request in Postman
2. Set method to **POST**
3. Enter URL: `http://localhost:3000/students`
4. Go to **Headers** tab, add:
   - Key: `Content-Type`
   - Value: `application/json`
5. Go to **Body** tab, select **raw** and **JSON**
6. Enter:
   ```json
   {
     "fullName": "Sara Khan",
     "email": "sara@example.com",
     "phone": "03119876543",
     "department": "Software Engineering",
     "semester": "3",
     "gender": "Female"
   }
   ```
7. Click **Send**
8. Expected Response: `201 Created` with success message

### Test 3: DELETE Student

1. First, GET all students to find a student ID
2. Create a new request
3. Set method to **DELETE**
4. Enter URL: `http://localhost:3000/students/STD001` (use actual ID)
5. Click **Send**
6. Expected Response: `200 OK` with success message

## 🎨 Color Theme

- **White (#FFFFFF):** Main background
- **Black (#000000):** Text and headings
- **Dark Maroon (#800020):** Primary buttons and highlights
- **Charcoal (#36454F):** Navigation bar

## ✅ How to Use the Application

1. **View Dashboard:** See total registered students
2. **Register Student:** Fill the form and click "Register Student"
3. **View Students:** Scroll down to see all registered students in a table
4. **Delete Student:** Click the "Delete" button next to any student

## 🐛 Troubleshooting

### Problem: "Failed to load students"
**Solution:** Make sure the backend server is running on port 3000

### Problem: "npm is not recognized"
**Solution:** Install Node.js from https://nodejs.org/

### Problem: CORS Error
**Solution:** Make sure CORS is installed: `npm install cors`

### Problem: Port 3000 already in use
**Solution:** Change the PORT variable in `server.js` to a different number (e.g., 3001)

## 📝 Git Commands

### Initialize Git Repository
```powershell
git init
```

### Stage All Files
```powershell
git add .
```

### Commit 1: Initial Setup
```powershell
git commit -m "Initial commit: Create project structure and frontend layout"
```

### Commit 2: Add Form and Validation
```powershell
git add .
git commit -m "Add student registration form and JavaScript validation"
```

### Commit 3: Backend Implementation
```powershell
git add .
git commit -m "Implement Express REST API and JSON file storage"
```

### Commit 4: Integration
```powershell
git add .
git commit -m "Integrate frontend with backend and complete student management system"
```

### Push to GitHub
```powershell
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## 👨‍💻 Author

BS Computer Science - 5th Semester Student

## 📄 License

This project is for educational purposes as part of Full Stack Development Lab Quiz.
