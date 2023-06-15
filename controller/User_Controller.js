// const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/User.js");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  if (!username || !email || !password) {
    console.log("All fields are mandatory!");
    res.status(400).send("All fields are mandatory!");
  } else {
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      console.log("User already registered!");
      res.status(400).send("User already registered!");
    } else {
      //Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("Hashed Password: ", hashedPassword);
      const user = await User.create({
        username,
        email,
        password: hashedPassword,
      });

      console.log(`User created ${user}`);
      if (user) {
        res.json({ _id: user._id, email: user.email });
      } else {
        console.log("User data us not valid");
        res.status(400).send("User data us not valid");
      }
      res.json({ message: "Register the user" });
    }
  }
};

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    console.log("All fields are mandatory!");
    res.status(400).send("All fields are mandatory!");
  } else {
    const user = await User.findOne({ email });
    //compare password with hashedpassword
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
          },
        },
        process.env.ACCESS_TOKEN_SECERT,
        { expiresIn: "15m" }
      );
      res.json({ accessToken });
    } else {
      console.log("email or password is not valid");
      res.status(400).send("email or password is not valid");
    }
  }
};

module.exports = { registerUser, loginUser };
