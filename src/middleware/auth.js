import jwt from "jsonwebtoken";

const teacherAuth = async (req, res, next) => {
  const tokenData = req.header("Authorization");

  if (!tokenData) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const tokenJson = JSON.parse(tokenData);
    const token = tokenJson.token;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Unauthorized", error: error.message });
  }
};

export default { teacherAuth };
