# Postman API Testing Guide

Complete guide for testing the Student Management System APIs using Postman.

## 📥 Prerequisites

1. Download and install Postman: https://www.postman.com/downloads/
2. Make sure your backend server is running on `http://localhost:3000`

## 🧪 Test 1: GET All Students

### Purpose
Retrieve all registered students from the database.

### Request Details
- **HTTP Method:** GET
- **URL:** `http://localhost:3000/students`
- **Headers:** None required
- **Body:** None required

### Steps in Postman
1. Open Postman
2. Click on **New** > **HTTP Request**
3. Select **GET** from the dropdown
4. Enter URL: `http://localhost:3000/students`
5. Click **Send**

### Expected Response

**Status Code:** `200 OK`

**Response Body (if students exist):**
```json
[
  {
    "id": "STD001",
    "fullName": "Ahmed Ali",
    "email": "ahmed@example.com",
    "phone": "03001234567",
    "department": "Computer Science",
    "semester": "5",
    "gender": "Male",
    "registeredDate": "2026-11-23T12:35:00.000Z"
  },
  {
    "id": "STD002",
    "fullName": "Sara Khan",
    "email": "sara@example.com",
    "phone": "03119876543",
    "department": "Software Engineering",
    "semester": "3",
    "gender": "Female",
    "registeredDate": "2026-11-23T12:36:00.000Z"
  }
]
```

**Response Body (if no students):**
```json
[]
```

---

## 🧪 Test 2: POST New Student

### Purpose
Register a new student in the system.

### Request Details
- **HTTP Method:** POST
- **URL:** `http://localhost:3000/students`
- **Headers:** 
  - `Content-Type: application/json`
- **Body:** JSON data with student information

### Steps in Postman
1. Create a new request
2. Select **POST** from the dropdown
3. Enter URL: `http://localhost:3000/students`
4. Click on **Headers** tab
5. Add header:
   - Key: `Content-Type`
   - Value: `application/json`
6. Click on **Body** tab
7. Select **raw** radio button
8. Select **JSON** from the dropdown (next to GraphQL)
9. Enter the JSON data (see examples below)
10. Click **Send**

### Example Request Body 1
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

### Example Request Body 2
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

### Example Request Body 3
```json
{
  "fullName": "Ali Raza",
  "email": "ali@example.com",
  "phone": "03221234567",
  "department": "Data Science",
  "semester": "7",
  "gender": "Male"
}
```

### Expected Response (Success)

**Status Code:** `201 Created`

**Response Body:**
```json
{
  "message": "Student registered successfully!",
  "student": {
    "id": "STD001",
    "fullName": "Ahmed Ali",
    "email": "ahmed@example.com",
    "phone": "03001234567",
    "department": "Computer Science",
    "semester": "5",
    "gender": "Male",
    "registeredDate": "2026-11-23T12:35:00.000Z"
  }
}
```

### Expected Response (Error - Missing Fields)

**Status Code:** `400 Bad Request`

**Response Body:**
```json
{
  "message": "All fields are required!"
}
```

### Expected Response (Error - Duplicate Email)

**Status Code:** `400 Bad Request`

**Response Body:**
```json
{
  "message": "Email already registered!"
}
```

---

## 🧪 Test 3: DELETE Student

### Purpose
Delete a student from the system using their Student ID.

### Request Details
- **HTTP Method:** DELETE
- **URL:** `http://localhost:3000/students/:id`
  - Replace `:id` with actual student ID (e.g., `STD001`)
- **Headers:** None required
- **Body:** None required

### Steps in Postman
1. First, perform a GET request to see existing students and their IDs
2. Create a new request
3. Select **DELETE** from the dropdown
4. Enter URL: `http://localhost:3000/students/STD001`
   - Replace `STD001` with the actual student ID you want to delete
5. Click **Send**

### Example URLs
- `http://localhost:3000/students/STD001`
- `http://localhost:3000/students/STD002`
- `http://localhost:3000/students/STD003`

### Expected Response (Success)

**Status Code:** `200 OK`

**Response Body:**
```json
{
  "message": "Student deleted successfully!",
  "student": {
    "id": "STD001",
    "fullName": "Ahmed Ali",
    "email": "ahmed@example.com",
    "phone": "03001234567",
    "department": "Computer Science",
    "semester": "5",
    "gender": "Male",
    "registeredDate": "2026-11-23T12:35:00.000Z"
  }
}
```

### Expected Response (Error - Student Not Found)

**Status Code:** `404 Not Found`

**Response Body:**
```json
{
  "message": "Student not found!"
}
```

---

## 🔄 Complete Testing Workflow

### Step-by-Step Testing Process

1. **Start Backend Server**
   ```powershell
   cd backend
   npm start
   ```

2. **Test GET (Empty Database)**
   - Expected: Empty array `[]`

3. **Test POST (Add First Student)**
   - Use Example Request Body 1
   - Expected: `201 Created`

4. **Test GET (Verify Student Added)**
   - Expected: Array with 1 student

5. **Test POST (Add Second Student)**
   - Use Example Request Body 2
   - Expected: `201 Created`

6. **Test POST (Duplicate Email)**
   - Use same email as before
   - Expected: `400 Bad Request` - "Email already registered!"

7. **Test GET (Verify Both Students)**
   - Expected: Array with 2 students

8. **Test DELETE (Remove First Student)**
   - Use student ID from GET response
   - Expected: `200 OK`

9. **Test GET (Verify Deletion)**
   - Expected: Array with 1 student (second student only)

10. **Test DELETE (Non-existent Student)**
    - Use an invalid ID like `STD999`
    - Expected: `404 Not Found`

---

## 📊 HTTP Status Codes Used

| Status Code | Meaning | When Used |
|-------------|---------|-----------|
| `200 OK` | Success | GET all students, DELETE student |
| `201 Created` | Resource created | POST new student |
| `400 Bad Request` | Invalid request | Missing fields, duplicate email |
| `404 Not Found` | Resource not found | DELETE non-existent student |
| `500 Internal Server Error` | Server error | File read/write failures |

---

## 🎯 Common Testing Errors

### Error 1: "Could not get any response"
**Cause:** Backend server is not running  
**Solution:** Start the server with `npm start` in backend folder

### Error 2: "ECONNREFUSED"
**Cause:** Wrong port number or server not started  
**Solution:** Verify server is running on port 3000

### Error 3: "Cannot POST /student" (without 's')
**Cause:** Wrong endpoint URL  
**Solution:** Use `/students` (plural) not `/student`

### Error 4: "Unexpected token" in response
**Cause:** Wrong Content-Type header  
**Solution:** Add `Content-Type: application/json` header

---

## 💡 Tips for Viva

**Q: Why do we use Postman?**  
A: Postman helps us test our backend API without needing the frontend. We can test if our endpoints work correctly before connecting them to the frontend.

**Q: What is the difference between GET, POST, and DELETE?**  
A: 
- GET is used to retrieve data
- POST is used to create new data
- DELETE is used to remove data

**Q: Why do we send JSON in the body?**  
A: JSON is a standard format for sending structured data between frontend and backend. It's easy to read and parse.

**Q: What is a Status Code?**  
A: Status codes tell us if our request was successful (200, 201) or if there was an error (400, 404, 500).

---

## 📝 Save Your Postman Collection

1. Click on the three dots next to your request
2. Select **Add to Collection**
3. Create a new collection: "Student Management API"
4. Save all three requests (GET, POST, DELETE)
5. Export collection: **Collections** > **...** > **Export**
6. Save as `Student_Management_API.postman_collection.json`

This way, you can share your API tests with your instructor or classmates.

---

## ✅ Verification Checklist

Before your viva, make sure you can:

- [ ] Open Postman
- [ ] Send a GET request and see students
- [ ] Send a POST request with valid data
- [ ] Send a POST request with missing fields (should fail)
- [ ] Send a DELETE request with valid ID
- [ ] Send a DELETE request with invalid ID (should fail)
- [ ] Explain what each status code means
- [ ] Explain the purpose of Content-Type header
- [ ] Show that data persists in students.json file

---

**Good luck with your testing!** 🚀
