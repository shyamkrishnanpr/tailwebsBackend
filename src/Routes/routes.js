import express from "express";

import authMiddleware from "../middleware/auth.js";
import {
  teacherLogin,
  addStudentDetails,
  getStudentsDetails,
  editStudentDetails,
  deleteStudentDetail,
} from "../Controller/controller.js";

const router = express.Router();

// GET

router.get("/studentData", authMiddleware.teacherAuth, getStudentsDetails);

// POST

router.post("/login", teacherLogin);
router.post("/addStudent", authMiddleware.teacherAuth, addStudentDetails);

// PUT

router.put("/editStudent/:id", authMiddleware.teacherAuth, editStudentDetails);

// DELETE

router.delete(
  "/deleteStudent/:id",
  authMiddleware.teacherAuth,
  deleteStudentDetail
);

export default router;
