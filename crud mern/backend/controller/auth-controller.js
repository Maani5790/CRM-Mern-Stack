import userModel from "../model/auth.js";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
const SECRET_KEY = "authUser"

export const signup = async (req, res) => {
  const { username, email, password } = req.body
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "email already exist" })
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await userModel.create({
      email: email,
      password: hashedPassword,
      username: username
    });

    const token = jwt.sign({ email: result.email, id: result.id }, SECRET_KEY);
    res.status(201).json({ user: result, token: token })


  } catch (error) {
    console.log("error while signup")
    res.status(401).json({ message: "something went wrong" })
  }
}

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ message: "user not found" })

    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "invalid" })
    }

    const token = jwt.sign({ email: existingUser.email, id: existingUser.id }, SECRET_KEY);
    res.status(201).json({ user: existingUser, token: token })

  } catch (error) {
    console.log("error while login")
    console.log("error while login")
    res.status(401).json({ message: "something went wrong" })
  }

}

export default { signin, signup }


