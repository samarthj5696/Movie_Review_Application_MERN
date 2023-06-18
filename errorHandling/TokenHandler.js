const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  // let token;
  // let authHeader = req.headers.Authorization || req.headers.authorization;
  // if (authHeader && authHeader.startsWith("Bearer")) {
  //   token = authHeader.split(" ")[1];
  //   jwt.verify(token, process.env.ACCESS_TOKEN_SECERT, (err, decoded) => {
  //     if (err) {
  //       console.log("User is not authorized");
  //       console.log(err);
  //       console.log(token);
  //       console.log(process.env.ACCESS_TOKEN_SECERT);
  //       res.status(400).send("User is not authorized");
  //     } else {
  //       req.user = decoded.user;
  // console.log("token validate");
  next();
  //   }
  // });

  // if (!token) {
  //   console.log("User is not authorized or token is missing");
  //   res.status(400).send("User is not authorized or token is missing");
  // }
  // }
};

module.exports = validateToken;
