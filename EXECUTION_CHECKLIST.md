# ✅ Execution Checklist - Before Lab Quiz

Use this checklist to ensure everything is working perfectly before your lab quiz presentation.

---

## 📋 Pre-Quiz Setup (Do This Before Class)

### 1. System Requirements
- [ ] Node.js installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Google Chrome or Firefox installed
- [ ] VS Code installed
- [ ] Postman installed (optional but recommended)

### 2. Project Files
- [ ] All files present in `Lab Quiz` folder
- [ ] `frontend/` folder exists with 3 files
- [ ] `backend/` folder exists with files
- [ ] `node_modules/` folder exists in backend
- [ ] All `.md` documentation files present

### 3. Dependencies Installation
```powershell
cd backend
npm install
```
- [ ] Express.js installed (check package-lock.json)
- [ ] CORS installed (check package-lock.json)
- [ ] No errors during installation

---

## 🚀 Startup Checklist (Do This in Class)

### Step 1: Open Project
- [ ] Open VS Code
- [ ] Open `Lab Quiz` folder
- [ ] All files visible in Explorer panel

### Step 2: Start Backend Server
```powershell
cd backend
npm start
```
- [ ] Terminal shows "Server is running on http://localhost:3000"
- [ ] No error messages
- [ ] Terminal stays open (don't close it!)

### Step 3: Open Frontend
- [ ] Navigate to `frontend/` folder
- [ ] Open `index.html` in browser
- [ ] Page loads without errors
- [ ] Navigation bar displays correctly
- [ ] Dashboard shows "Total Registered Students: 0"
- [ ] Registration form displays correctly
- [ ] Table section displays correctly

---

## 🧪 Functionality Testing Checklist

### Test 1: Student Registration ✅
- [ ] Fill in Full Name: "Ahmed Ali"
- [ ] Fill in Email: "ahmed@example.com"
- [ ] Fill in Phone: "03001234567"
- [ ] Select Department: "Computer Science"
- [ ] Select Semester: "5"
- [ ] Select Gender: "Male"
- [ ] Click "Register Student" button

**Expected Results:**
- [ ] Green success message appears
- [ ] Form clears automatically
- [ ] Student appears in table below
- [ ] Dashboard count changes to "1"
- [ ] All student details display correctly

---

### Test 2: Form Validation ✅
- [ ] Try to submit empty form
- [ ] Error message: "Please fill in all required fields!"

- [ ] Enter invalid email: "ahmed@" 
- [ ] Error message: "Please enter a valid email address!"

- [ ] Enter invalid phone: "123"
- [ ] Error message: "Please enter a valid phone number!"

**Expected Results:**
- [ ] Form does not submit
- [ ] Appropriate error messages show
- [ ] Form data not saved

---

### Test 3: Multiple Students ✅
Register 3 more students:

**Student 2:**
- [ ] Name: "Sara Khan"
- [ ] Email: "sara@example.com"
- [ ] Phone: "03119876543"
- [ ] Department: "Software Engineering"
- [ ] Semester: "3"
- [ ] Gender: "Female"

**Student 3:**
- [ ] Name: "Ali Raza"
- [ ] Email: "ali@example.com"
- [ ] Phone: "03221234567"
- [ ] Department: "Data Science"
- [ ] Semester: "7"
- [ ] Gender: "Male"

**Student 4:**
- [ ] Name: "Fatima Ahmed"
- [ ] Email: "fatima@example.com"
- [ ] Phone: "03331234567"
- [ ] Department: "Information Technology"
- [ ] Semester: "4"
- [ ] Gender: "Female"

**Expected Results:**
- [ ] Dashboard shows "4" students
- [ ] All 4 students visible in table
- [ ] Student IDs: STD001, STD002, STD003, STD004

---

### Test 4: Duplicate Email Validation ✅
- [ ] Try to register student with email "ahmed@example.com" again
- [ ] Error message: "Email already registered!"

**Expected Results:**
- [ ] Registration fails
- [ ] Error message displayed
- [ ] Student count stays at 4

---

### Test 5: Delete Student ✅
- [ ] Click "Delete" button for first student (STD001)
- [ ] Confirm deletion in popup dialog
- [ ] Student disappears from table
- [ ] Dashboard count decreases to "3"

**Expected Results:**
- [ ] Student removed from display
- [ ] Count updates automatically
- [ ] Other students remain unchanged

---

### Test 6: Data Persistence ✅
- [ ] Keep browser open
- [ ] Go to terminal, press `Ctrl+C` to stop server
- [ ] Restart server: `npm start`
- [ ] Refresh browser page

**Expected Results:**
- [ ] All remaining students still display
- [ ] Dashboard count is correct
- [ ] No data lost

---

## 🔧 Backend Testing (Postman)

### Test 1: GET All Students
- [ ] Open Postman
- [ ] Method: GET
- [ ] URL: `http://localhost:3000/students`
- [ ] Click Send
- [ ] Status: 200 OK
- [ ] Response shows array of students

---

### Test 2: POST New Student
- [ ] Method: POST
- [ ] URL: `http://localhost:3000/students`
- [ ] Headers: `Content-Type: application/json`
- [ ] Body (raw JSON):
```json
{
  "fullName": "Postman Test User",
  "email": "postman@example.com",
  "phone": "03441234567",
  "department": "Cyber Security",
  "semester": "6",
  "gender": "Male"
}
```
- [ ] Click Send
- [ ] Status: 201 Created
- [ ] Response contains new student with ID
- [ ] Verify student appears in frontend

---

### Test 3: DELETE Student
- [ ] Method: DELETE
- [ ] URL: `http://localhost:3000/students/STD005`
- [ ] Click Send
- [ ] Status: 200 OK
- [ ] Response shows deleted student
- [ ] Verify student removed in frontend

---

## 📱 Responsive Design Testing

### Mobile View
- [ ] Press F12 in browser
- [ ] Press Ctrl+Shift+M (toggle device toolbar)
- [ ] Select: iPhone 12 Pro
- [ ] Form displays in single column
- [ ] Table scrolls horizontally
- [ ] Dashboard fits screen
- [ ] Buttons are touchable

### Tablet View
- [ ] Select: iPad
- [ ] Form shows 2 columns
- [ ] Table fits width
- [ ] All content readable

### Desktop View
- [ ] Select: Responsive (or close DevTools)
- [ ] Full width layout
- [ ] Form shows 2 columns
- [ ] Table displays all columns

---

## 🎨 UI/Design Checklist

### Colors
- [ ] Navigation bar: Charcoal (#36454F)
- [ ] Dashboard card: Dark Maroon gradient
- [ ] Buttons: Dark Maroon (#800020)
- [ ] Background: Light gray
- [ ] Text: Black
- [ ] Form cards: White

### Layout
- [ ] Clean, professional appearance
- [ ] Proper spacing between elements
- [ ] Rounded corners on cards
- [ ] Subtle shadows
- [ ] Good contrast
- [ ] Readable fonts

---

## 📄 Files Verification

### Frontend Files
- [ ] `frontend/index.html` exists
- [ ] `frontend/style.css` exists
- [ ] `frontend/script.js` exists

### Backend Files
- [ ] `backend/server.js` exists
- [ ] `backend/package.json` exists
- [ ] `backend/students.json` exists
- [ ] `backend/node_modules/` folder exists

### Documentation Files
- [ ] `README.md` exists
- [ ] `QUICK_START_GUIDE.md` exists
- [ ] `POSTMAN_TESTING_GUIDE.md` exists
- [ ] `VIVA_QUESTIONS.md` exists
- [ ] `GIT_COMMANDS.md` exists
- [ ] `PROJECT_SUMMARY.md` exists
- [ ] `EXECUTION_CHECKLIST.md` exists (this file)

---

## 💻 Code Review Checklist

### Frontend Code
- [ ] HTML is properly formatted
- [ ] CSS follows naming conventions
- [ ] JavaScript has comments
- [ ] Variable names are meaningful
- [ ] Functions have clear purposes
- [ ] No console errors in browser

### Backend Code
- [ ] server.js has comments
- [ ] Functions are well-named
- [ ] Error handling in place
- [ ] Endpoints work correctly
- [ ] No terminal errors

---

## 🎓 Viva Preparation Checklist

### Can You Explain:
- [ ] What is HTML5?
- [ ] What is Bootstrap?
- [ ] What is the Bootstrap grid system?
- [ ] Difference between let and const?
- [ ] What are arrow functions?
- [ ] What is DOM manipulation?
- [ ] How does form validation work?
- [ ] What is the Fetch API?
- [ ] What is async/await?
- [ ] What is Node.js?
- [ ] What is Express.js?
- [ ] What is a REST API?
- [ ] Difference between GET, POST, DELETE?
- [ ] What are HTTP status codes?
- [ ] Why use JSON file storage?
- [ ] What is CORS?
- [ ] What is Git?
- [ ] What is a commit?

**Study:** `VIVA_QUESTIONS.md` for detailed answers

---

## 📊 Demonstration Checklist

### Be Ready to Show:

#### 1. Working Application
- [ ] Start backend server
- [ ] Open frontend in browser
- [ ] Register a student live
- [ ] Show validation error
- [ ] Delete a student
- [ ] Show data persistence

#### 2. Code Walkthrough
- [ ] Open `script.js` in VS Code
- [ ] Explain `registerStudent()` function
- [ ] Explain how Fetch works
- [ ] Open `server.js`
- [ ] Explain POST endpoint
- [ ] Show `students.json` file

#### 3. Postman Testing
- [ ] Show GET request
- [ ] Show POST request
- [ ] Show DELETE request
- [ ] Explain status codes

#### 4. Responsive Design
- [ ] Show mobile view
- [ ] Show tablet view
- [ ] Show desktop view

#### 5. Git History
- [ ] Run `git log --oneline`
- [ ] Show commit messages
- [ ] Explain what each commit contains

---

## 🚨 Common Issues - Quick Fixes

### Issue: Backend won't start
**Check:**
- [ ] Are you in `backend` folder? (`cd backend`)
- [ ] Is Node.js installed? (`node --version`)
- [ ] Are dependencies installed? (run `npm install`)

### Issue: Frontend can't connect
**Check:**
- [ ] Is backend running? (check terminal)
- [ ] Is URL correct in script.js? (`http://localhost:3000`)
- [ ] Check browser console for errors (F12)

### Issue: Changes not showing
**Fix:**
- [ ] Refresh browser (F5)
- [ ] Hard refresh (Ctrl+Shift+R)
- [ ] Restart backend server

### Issue: Form not submitting
**Check:**
- [ ] All required fields filled?
- [ ] Email format correct?
- [ ] Phone number valid?
- [ ] Check browser console for errors

---

## 📸 Screenshots Checklist (Optional)

Take these screenshots for your report:

- [ ] Dashboard with student count
- [ ] Registration form (filled)
- [ ] Students table with data
- [ ] Success message
- [ ] Validation error message
- [ ] Mobile responsive view
- [ ] Postman GET request
- [ ] Postman POST request
- [ ] VS Code with code open
- [ ] Terminal with server running

---

## ⏰ Time Management

**Total Demo Time: 10-15 minutes**

- 2 min: Project overview and features
- 3 min: Live demonstration (register + delete)
- 2 min: Code walkthrough
- 2 min: Postman testing
- 1 min: Responsive design
- 5 min: Viva questions

---

## 🎯 Final Pre-Submission Checklist

### Code Quality
- [ ] No syntax errors
- [ ] Code is properly indented
- [ ] Comments are present
- [ ] Variable names make sense
- [ ] No unnecessary console.logs

### Functionality
- [ ] All features work
- [ ] No bugs
- [ ] Data persists
- [ ] Validation works
- [ ] Error messages show

### Documentation
- [ ] README is complete
- [ ] Setup instructions clear
- [ ] API documented
- [ ] Viva guide ready

### Git
- [ ] Repository initialized
- [ ] Commits made
- [ ] Commit messages clear
- [ ] (Optional) Pushed to GitHub

---

## 💪 Confidence Boosters

You have:
- ✅ A fully working application
- ✅ Professional UI design
- ✅ Clean, understandable code
- ✅ Complete documentation
- ✅ 45+ viva questions prepared
- ✅ Testing done
- ✅ Git history ready

**You are 100% ready for your lab quiz!**

---

## 📞 Last Minute Help

If something goes wrong:

1. **Don't panic** - stay calm
2. **Check the error message** - read what it says
3. **Look in the right place**:
   - Frontend errors → Browser console (F12)
   - Backend errors → Terminal
4. **Quick fixes**:
   - Restart backend server
   - Refresh browser
   - Check file paths
   - Verify port 3000 is free

---

## 🎓 Final Words

**Remember:**
- Speak clearly and confidently
- Explain concepts in simple terms
- Show your code with pride
- It's okay to say "Let me check the code"
- You built this - you understand it

**You've got this!** 🚀

---

**Good luck with your Full Stack Development Lab Quiz!** ⭐

**Date:** November 23, 2026  
**Status:** Ready for Submission ✅

---

**Print this checklist and check off items as you go!**
