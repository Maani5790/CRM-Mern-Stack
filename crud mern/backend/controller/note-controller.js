import noteModel from "../model/note.js";

export const createPost = async (req, res) => {
    console.log(req.userId);
    const { title, description } = req.body;
    const newCostumerDetail = new noteModel({
        title: title,
        description: description,
        userId: req.userId
    });

    try {
        await newCostumerDetail.save();
        res.status(201).json(newCostumerDetail);
    } catch (error) {
        console.log("error");
        res.status(500).json({ message: "error coming while fetching data"})
    }
};

export const getPost = async (req, res) => {
``
    try {
        const posts = await noteModel.find({ userId: req.userId });
        res.status(200).json(posts);


    } catch (error) {
        console.log("error");
        res.status(500).json({ message: "error" })

    }

};

export const deletePost = async (req, res) => {
    console.log("post delete")
};

export const updatePost = async (req, res) => {
    console.log("post update")
};


export default { createPost, getPost, deletePost, updatePost }


