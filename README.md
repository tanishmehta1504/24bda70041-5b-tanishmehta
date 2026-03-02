# Student Management Web App

This repository contains a simple **Node.js** and **Express** application implementing a basic student management system with views rendered using **EJS** templates. It allows viewing, editing, and updating student records.

## 📁 Project Structure

```
index.js
package.json
config/
  db.js
controllers/
  student.controller.js
models/
  student.model.js
routes/
  student.routes.js
  student.view.routes.js
views/
  students/
    edit.ejs
    index.ejs
```

## 🛠 Dependencies

- `express` - Web framework
- `mongoose` - ODM for MongoDB
- `ejs` - Template engine
- `body-parser` - Middleware for request bodies (if used)

*(Dependencies are listed in `package.json`.)*

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd 24bda70041-5b-tanishmehta
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure the database**
   - Update `config/db.js` with your MongoDB connection string.

4. **Start the server**
   ```bash
   node index.js
   ```
   The app will typically run on `http://localhost:3000`.

## 🧩 Features

- List all students
- Edit student details

## 📄 Routes

- `GET /students` - Render list of students
- `GET /students/edit/:id` - Show edit form for a student
- `POST /students/edit/:id` - Update student information

API routes defined in `student.routes.js` and view routes in `student.view.routes.js`.

## 🧠 Architecture Overview

- **Models** handle data schema (Mongoose)
- **Controllers** contain business logic and interact with models
- **Routes** define application endpoints
- **Views** are EJS templates for UI rendering

## ✨ Contributions

This is a minimal example application. Contributions, enhancements, or bug fixes are welcome.

---

*Created for educational purposes.*
