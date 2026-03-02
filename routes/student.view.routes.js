import express from "express";
import Student from "../models/student.model.js";

const router = express.Router();

// SHOW PAGE
router.get("/students", async (req, res) => {
  const students = await Student.find();
  res.render("students/index", { students });
});

// CREATE
router.post("/students/create", async (req, res) => {
  await Student.create(req.body);
  res.redirect("/view/students");
});

// DELETE
router.get("/students/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/view/students");
});

// EDIT PAGE
router.get("/students/edit/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render("students/edit", { student });
});

// UPDATE
router.post("/students/update/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/view/students");
});

export default router;