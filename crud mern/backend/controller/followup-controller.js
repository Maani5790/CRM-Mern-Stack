import followModel from "../model/followup.js";

export const addMember = async (req, res) => {
    const { reference, campaign, time, follow  } = req.body;

    try {
         const existingMember  = await followModel.findOne({reference: reference});
         if(existingMember){
            return res.status(400).json({ message: "member already exist" });
         }
         const member = await followModel.create({
            reference: reference,
            campaign: campaign,
            time: time,
            follow : follow   
          });
       
          res.status(201).json({member})

    } catch (error) {
        console.log("error while add")
    res.status(401).json({ message: "something went wrong" });
    };
};

export const  deleteMember = async (req, res) => {
    console.log("deleted succesfully")
};


export const  editMember = async (req, res) => {
    res.send("edit succesfully")
};

export default { addMember, deleteMember, editMember }


