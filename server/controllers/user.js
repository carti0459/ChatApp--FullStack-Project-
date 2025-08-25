import { User } from "../models/user.js";

const newUser = async (req, res) => {

  const { name, username, password, bio } = req.body;

  console.log(req.body);

  const avatar = {
    public_id: "dfkjgnv",
    url: "asdkkd",
  }; 
  await User.create({
    name: "Karthik",
    username: "karthiknair",
    password: "karthik",
    avatar,
  });

  res.status(201).json({ message: "User Created successfully" });
};

const login = (req, res) => {
  res.send("Hello World");
}; 

export { login, newUser };
