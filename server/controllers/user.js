import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { sendToken } from "../utils/features.js";
import { TryCatch } from "../middlewares/error.js";

// Create a new user and save it to the database
// save token in cookie

const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;

  console.log(req.body);

  const avatar = {
    public_id: "dfkjgnv",
    url: "asdkkd",
  };
  const user = await User.create({
    name,
    bio,
    username,
    password,
    avatar,
  });

  sendToken(res, user, 201, "User Created Successfully");
};

const login = TryCatch(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password");
  if (!user) return next(new Error("Invalid Username"));

  const isMatch = await compare(password, user.password);

  if (!isMatch) return next(new Error("Invalid Password"));

  sendToken(res, user, 201, `Welcome Back, ${user.name}`);
});

const getProfile = async (req, res) => {};

export { login, newUser, getProfile };
