export const teacherAuth = async (req, res, next) => {
  const tokenData = req.header("Authorization");

  console.log("in verify", tokenData);

  if (!tokenData) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const tokenJson = JSON.parse(tokenData.split(" ")[1]);
  const token = tokenJson.token;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};
