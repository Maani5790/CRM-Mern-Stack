import User from "../model/user.js";

export const addUser = async (request, response) => {
    const user = request.body;
    // console.log(user)
    const newUser = new User(user);
    try {
        await newUser.save();
        response.status(201).json(newUser)

    } catch (error) {
        response.status(409).json({ message: error.message });

    }
}

export const getUsers = async (request, response) => {
    try {
        const users = await User.find({});
        response.status(200).json(users)
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

export const getUser = async (request,response) =>{
    try {
        // const user = await User.find({ _id: request.params.id});
        const user = await User.findById(request.params.id)
        response.status(200).json(user)
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}