import express from "express";
import {
  teacherLogin,
  addStudentDetails,
  getStudentsDetails,
  editStudentDetails,
  deleteStudentDetail,
} from "../Controller/controller.js";

const router = express.Router();

// GET

router.get("/studentData", getStudentsDetails);

// POST

router.post("/login", teacherLogin);
router.post("/addStudent", addStudentDetails);

// PUT

router.put("/editStudent/:id", editStudentDetails);

// DELETE

router.delete("/deleteStudent/:id", deleteStudentDetail);

export default router;
