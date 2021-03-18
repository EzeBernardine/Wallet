const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const header = req.get("Authorization");
  if (!header) {
    return res.status(401).send({ message: "Not Authorized" });
  }
  const token = header;
  let decoded;
  try {
    decoded = await jwt.verify(token, process.env.SECRET);
  } catch (error) {
    return res
      .status(401)
      .send({ message: "Could not process authentication status" });
  }

  if (!decoded) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  req._id = decoded._id;
  next();
};