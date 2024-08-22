// @ts-nocheck
const User=require("./model");

const createUser=async(req, res)=>{
    try{
        const { name, email, phone }=req.body;
        const existingUser=await User.findOne({ name });
        if(existingUser){
            return res.status(400).json({ error: "User already exists" });
        }
        const user=new User({ name, email, phone });
        await user.save();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
};

const getUsers=async(req, res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
};

const updateUser=async(req, res)=>{
    try{
        const { id }=req.params;
        const { name, email, phone }=req.body;
        const user=await User.findByIdAndUpdate(
            id, 
            { name, email, phone },
            { new: true, runValidators: true }
        );

        if(!user){
            res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
};

const deleteUser=async(req, res)=>{
    try{
        const { id }=req.params;
        const user=await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
};

module.exports={
    createUser,
    getUsers,
    updateUser,
    deleteUser
}