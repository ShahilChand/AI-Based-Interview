import express from "express";
import bcrypt from "bcryptjs";
import Student from "../models/student_schema.js";
import Job from "../models/job_schema.js";

const router = express.Router();

///////////////////////////
// STUDENT ROUTES
///////////////////////////

// Register Student
router.post("/students/register", async (req, res) => {
  try {
    const { name, phone, college, skills, interests, email, password } = req.body;

    let existing = await Student.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = new Student({
      name,
      phone,
      college,
      skills,
      interests,
      email,
      password: hashedPassword,
    });

    await student.save();
    res.status(201).json({ message: "Student registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Login Student
router.post("/students/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (!student) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    res.json({ message: "Login successful", student });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get All Students
router.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

///////////////////////////
// JOB ROUTES
///////////////////////////

// Add Job
router.post("/jobs", async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({ message: "Job posted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get All Jobs
router.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
