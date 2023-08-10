import callModel from "../model/call.js";


export const  callDetails = async (req, res) => {
   const { reference, campaign, name, email, duration, calltime, callby } = req.body
   try {
     const existingHistory = await callModel.findOne({ email: email });
     if (existingHistory) {
       return res.status(400).json({ message: "already recorded on db" })
     }
   //   const hashedPassword = await bcrypt.hash(password, 10);
     const history = await callModel.create({
      reference: reference,
      campaign: campaign,
      name: name,
      email: email,
      duration: duration,
      calltime: calltime,
      callby: callby
     });
 
   //   const token = jwt.sign({ email: result.email, id: result.id }, SECRET_KEY);
   res.status(201).json({history})


   } catch (error) {
     console.log("error while add calls history")
     res.status(401).json({ message: "something went wrong" })
   }
};

export default callDetails;


