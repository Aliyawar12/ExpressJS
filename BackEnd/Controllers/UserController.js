const bcrypt = require("bcrypt");
const User = require("../Models/Users.js");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, avatar, bio, dateJoined, courses} =
      req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
      avatar: avatar,
      bio: bio,
      dateJoined: dateJoined,
      course: courses,
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to create user / Email Already Registered" });
  }
};
