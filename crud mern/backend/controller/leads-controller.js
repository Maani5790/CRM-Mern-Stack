import leadModel from "../model/lead.js";

export const addLeads = async (req, res) => {
    const { reference, campaign, name, email} = req.body;

    try {
         const existingLead  = await leadModel.findOne({reference: reference});
         if(existingLead){
            return res.status(400).json({ message: "oops leads exist" });
         }
         const leads = await leadModel.create({
            reference: reference,
            campaign: campaign,
            name: name,
            email: email  
          });
       
          res.status(201).json({leads})

    } catch (error) {
        console.log("error while add")
    res.status(401).json({ message: "something went wrong" });
    };
};

export const  deleteLeads = async (req, res) => {
    console.log("deleted succesfully")
};


export const  editLeads = async (req, res) => {
    res.send("edit succesfully")
};

export default { addLeads, deleteLeads, editLeads };


