# Git Commands Reference

Complete guide for using Git with your Student Management System project.

---

## 🎯 Why Use Git?

Git helps you:
- Track all changes to your code
- Save different versions of your project
- Collaborate with team members
- Submit your project to GitHub
- Revert mistakes if something breaks

---

## 📝 Git Workflow

```
Working Directory → Staging Area → Local Repository → Remote Repository (GitHub)
     (files)      →  (git add)   →  (git commit)   →     (git push)
```

---

## 🚀 Initial Setup (One Time Only)

### 1. Configure Git (If First Time Using Git)

```powershell
# Set your name
git config --global user.name "Your Name"

# Set your email
git config --global user.email "your.email@example.com"

# Check configuration
git config --list
```

**Example:**
```powershell
git config --global user.name "Ahmed Ali"
git config --global user.email "ahmed@example.com"
```

---

## 📂 Initialize Git Repository

### Step 1: Open Terminal in VS Code

Press `` Ctrl+` `` or go to **View > Terminal**

### Step 2: Make Sure You're in Project Root

```powershell
# Check current directory
pwd

# Should show: C:\Users\Muhammad Farooq\Desktop\Lab Quiz

# If not in correct folder:
cd "C:\Users\Muhammad Farooq\Desktop\Lab Quiz"
```

### Step 3: Initialize Git

```powershell
git init
```

**Output:**
```
Initialized empty Git repository in C:/Users/Muhammad Farooq/Desktop/Lab Quiz/.git/
```

This creates a hidden `.git` folder that tracks all changes.

---

## 📊 Check Status

```powershell
git status
```

This shows:
- Untracked files (new files)
- Modified files
- Staged files (ready to commit)

**Example Output:**
```
On branch main

Untracked files:
  frontend/
  backend/
  README.md
  
nothing added to commit but untracked files present
```

---

## ➕ Stage Files

### Stage All Files

```powershell
git add .
```

The `.` means "all files in current directory"

### Stage Specific Files

```powershell
git add frontend/index.html
git add backend/server.js
```

### Stage Specific Folder

```powershell
git add frontend/
git add backend/
```

### Check What's Staged

```powershell
git status
```

**Output:**
```
On branch main

Changes to be committed:
  new file:   frontend/index.html
  new file:   frontend/style.css
  ...
```

---

## 💾 Commit Changes

A commit is a saved snapshot of your code.

### Commit 1: Initial Project Structure

```powershell
git add .
git commit -m "Initial commit: Create project structure and frontend layout"
```

**What this includes:**
- Project folder structure
- HTML file with form and table
- CSS file with styling
- Empty JavaScript file

---

### Commit 2: Form and Validation

After completing the form and validation:

```powershell
git add frontend/script.js
git commit -m "Add student registration form and JavaScript validation"
```

**What this includes:**
- Form validation logic
- DOM manipulation code
- Event listeners

---

### Commit 3: Backend API

After creating the backend:

```powershell
git add backend/
git commit -m "Implement Express REST API and JSON file storage"
```

**What this includes:**
- server.js with all endpoints
- package.json
- students.json file

---

### Commit 4: Integration

After connecting frontend with backend:

```powershell
git add .
git commit -m "Integrate frontend with backend and complete student management system"
```

**What this includes:**
- Fetch API calls
- Complete functionality
- Final testing and fixes

---

### Commit 5: Documentation

```powershell
git add README.md POSTMAN_TESTING_GUIDE.md VIVA_QUESTIONS.md
git commit -m "Add comprehensive documentation and viva preparation"
```

---

## 📋 View Commit History

```powershell
git log
```

**Output:**
```
commit a1b2c3d4... (HEAD -> main)
Author: Ahmed Ali <ahmed@example.com>
Date:   Mon Nov 23 2026

    Integrate frontend with backend and complete student management system

commit e5f6g7h8...
Author: Ahmed Ali <ahmed@example.com>
Date:   Mon Nov 23 2026

    Implement Express REST API and JSON file storage
...
```

### View Compact Log

```powershell
git log --oneline
```

**Output:**
```
a1b2c3d Integrate frontend with backend and complete student management system
e5f6g7h Implement Express REST API and JSON file storage
i9j0k1l Add student registration form and JavaScript validation
m2n3o4p Initial commit: Create project structure and frontend layout
```

---

## 🌿 Branches

### View Current Branch

```powershell
git branch
```

**Output:**
```
* main
```

The `*` shows which branch you're on.

### Create New Branch

```powershell
git branch feature-edit-student
```

### Switch to Branch

```powershell
git checkout feature-edit-student
```

### Create and Switch in One Command

```powershell
git checkout -b feature-edit-student
```

### Switch Back to Main

```powershell
git checkout main
```

---

## 🔄 Push to GitHub

### Step 1: Create GitHub Repository

1. Go to https://github.com
2. Click **New Repository** (green button)
3. Repository name: `student-management-system`
4. Description: `Full Stack Student Management System for Lab Quiz`
5. Keep it **Public** or **Private** (your choice)
6. **DO NOT** initialize with README (we already have one)
7. Click **Create Repository**

---

### Step 2: Connect Local Repository to GitHub

```powershell
# Set main branch name
git branch -M main

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/student-management-system.git
```

**Replace `YOUR_USERNAME` with your GitHub username!**

**Example:**
```powershell
git remote add origin https://github.com/ahmedali/student-management-system.git
```

---

### Step 3: Verify Remote

```powershell
git remote -v
```

**Output:**
```
origin  https://github.com/YOUR_USERNAME/student-management-system.git (fetch)
origin  https://github.com/YOUR_USERNAME/student-management-system.git (push)
```

---

### Step 4: Push to GitHub

```powershell
git push -u origin main
```

**First time:** You'll be asked for GitHub username and password

**Output:**
```
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 8 threads
Compressing objects: 100% (12/12), done.
Writing objects: 100% (15/15), 25.43 KiB | 2.54 MiB/s, done.
Total 15 (delta 2), reused 0 (delta 0), pack-reused 0
To https://github.com/YOUR_USERNAME/student-management-system.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

✅ **Success!** Your code is now on GitHub.

---

### Step 5: Push Future Changes

After making changes:

```powershell
git add .
git commit -m "Fix: Update form validation logic"
git push
```

You don't need `-u origin main` after the first push.

---

## 🔍 Useful Git Commands

### Check Differences

```powershell
# See what changed in files
git diff

# See what changed in staged files
git diff --staged
```

---

### Undo Changes

```powershell
# Undo changes in a file (before staging)
git checkout -- filename.js

# Unstage a file (keep changes)
git reset filename.js

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes) ⚠️ DANGEROUS
git reset --hard HEAD~1
```

---

### Remove Files

```powershell
# Remove file from Git and disk
git rm filename.js
git commit -m "Remove unnecessary file"

# Remove file from Git only (keep on disk)
git rm --cached filename.js
git commit -m "Stop tracking file"
```

---

### Ignore Files (.gitignore)

Create a file named `.gitignore` in project root:

```
# Node modules
node_modules/

# Environment variables
.env

# OS files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/

# Log files
*.log

# Build files
dist/
build/
```

Then:
```powershell
git add .gitignore
git commit -m "Add .gitignore file"
```

---

## 📦 Clone Repository (Download from GitHub)

If you want to download your project on another computer:

```powershell
git clone https://github.com/YOUR_USERNAME/student-management-system.git
cd student-management-system
```

---

## 🔄 Pull Changes (Update from GitHub)

If you work on multiple computers:

```powershell
git pull origin main
```

This downloads latest changes from GitHub.

---

## 🚨 Common Issues and Solutions

### Issue 1: "fatal: not a git repository"

**Solution:**
```powershell
# You're not in the project folder
cd "C:\Users\Muhammad Farooq\Desktop\Lab Quiz"
git init
```

---

### Issue 2: "nothing to commit"

**Solution:**
```powershell
# You need to stage files first
git add .
git commit -m "Your message"
```

---

### Issue 3: "Please tell me who you are"

**Solution:**
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

### Issue 4: "failed to push"

**Solution:**
```powershell
# Pull first, then push
git pull origin main
git push origin main
```

---

### Issue 5: Accidentally committed wrong files

**Solution:**
```powershell
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Remove unwanted files
git reset unwanted-file.txt

# Commit again
git add .
git commit -m "Correct commit message"
```

---

## 📝 Git Best Practices

### 1. Commit Messages

**Good commit messages:**
```
✅ "Add student registration form with validation"
✅ "Fix: Correct email validation regex"
✅ "Update: Change button color to maroon"
✅ "Implement DELETE endpoint for students"
```

**Bad commit messages:**
```
❌ "update"
❌ "fixed stuff"
❌ "asdfgh"
❌ "changes"
```

---

### 2. Commit Frequency

- Commit after completing a feature
- Commit before trying something risky
- Commit at the end of the day
- Don't commit broken code

---

### 3. What to Commit

**DO commit:**
- Source code (HTML, CSS, JS)
- Configuration files (package.json)
- Documentation (README.md)

**DON'T commit:**
- `node_modules/` folder
- `.env` files with passwords
- Large binary files
- IDE-specific files

---

## 🎓 For Your Viva

### Be Ready to Explain:

**Q: What is Git?**  
A: Git is a version control system that tracks changes to our code and helps us save different versions.

**Q: What is a commit?**  
A: A commit is a saved snapshot of code with a descriptive message.

**Q: What is GitHub?**  
A: GitHub is a cloud platform where we can store our Git repositories and collaborate with others.

**Q: Why do we use `git add` before `git commit`?**  
A: `git add` stages files (prepares them), and `git commit` actually saves them. This two-step process lets us choose exactly what to commit.

**Q: What does `git push` do?**  
A: `git push` uploads our local commits to GitHub (remote repository).

**Q: Show me your commit history**  
A: 
```powershell
git log --oneline
```

---

## 📋 Complete Workflow Summary

```powershell
# 1. Initialize (once)
git init
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# 2. Make changes to code
# ... edit files ...

# 3. Check status
git status

# 4. Stage files
git add .

# 5. Commit
git commit -m "Descriptive message"

# 6. Push to GitHub (after connecting remote)
git push origin main
```

---

## ✅ Quick Reference Sheet

| Command | What it does |
|---------|-------------|
| `git init` | Initialize Git in folder |
| `git status` | Show changed files |
| `git add .` | Stage all files |
| `git add file.js` | Stage specific file |
| `git commit -m "msg"` | Save staged changes |
| `git log` | View commit history |
| `git log --oneline` | View compact history |
| `git diff` | Show changes |
| `git branch` | List branches |
| `git checkout -b name` | Create new branch |
| `git checkout main` | Switch to main branch |
| `git remote add origin url` | Connect to GitHub |
| `git push -u origin main` | First push |
| `git push` | Push changes |
| `git pull` | Download changes |
| `git clone url` | Download repository |

---

## 🎯 Your 4 Required Commits

As per your requirement, here are the 4 commits to make:

```powershell
# Commit 1
git add .
git commit -m "Initial commit: Create project structure and frontend layout"

# Commit 2
git add .
git commit -m "Add student registration form and JavaScript validation"

# Commit 3
git add .
git commit -m "Implement Express REST API and JSON file storage"

# Commit 4
git add .
git commit -m "Integrate frontend with backend and complete student management system"

# Push all commits
git push -u origin main
```

---

**You're now a Git expert!** 🚀

Good luck with your project submission!
