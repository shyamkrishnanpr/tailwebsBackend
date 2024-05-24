import jwt from "jsonwebtoken";

import Student from "../models/Student.js";

// teacher login

const teacherLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username) {
      return res.status(400).json({ message: "username is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    if (username == "Shyam" && password == "123456") {
      const payload = {
        username: username,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET);

      return res.status(200).json({
        status: 200,
        success: true,
        username: username,
        token: token,
        message: "Login successfull",
      });
    } else {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }
};

// add student details

const addStudentDetails = async (req, res, next) => {
  const { name, subject, mark } = req.body;

  console.log(req.body);
  if (!name || !subject || !mark) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  try {
    let student = await Student.findOne({ name, subject });

    if (student) {
      student.mark = mark;
      student = await student.save();
      return res.json(student);
    } else {
      const newStudent = new Student({
        name,
        subject,
        mark,
      });

      student = await newStudent.save();
      return res.json(student);
    }
  } catch (error) {
    console.log(error);
  }
};

// get students details

const getStudentsDetails = async (req, res, next) => {
  try {
    const studentsData = await Student.find().sort({ _id: -1 });

    return res.status(200).json(studentsData);
  } catch (error) {
    console.log(error);
  }
};

// edit student details

const editStudentDetails = async (req, res, next) => {
  const { id } = req.params;
  const { name, subject, mark } = req.body;

  if (!name || !subject || !mark) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    let existingStudent = await Student.findOne({
      name,
      subject,
      _id: { $ne: id },
    });

    if (existingStudent) {
      return res
        .status(400)
        .json({ msg: "Student with the same name and subject already exists" });
    }

    let student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ msg: "Student not found" });
    }

    student.name = name;
    student.subject = subject;
    student.mark = mark;
    student = await student.save();

    return res.status(200).json(student);
  } catch (error) {
    console.log(error);
  }
};

// delete student detail

const deleteStudentDetail = async (req, res, next) => {
  const { id } = req.params;
  try {
    let student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ msg: "Student not found" });
    }
    await Student.findByIdAndDelete(id);
    return res.status(200).json({ msg: "Student deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

export {
  teacherLogin,
  addStudentDetails,
  getStudentsDetails,
  editStudentDetails,
  deleteStudentDetail
};
