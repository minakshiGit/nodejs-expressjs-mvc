const User =require("../models/user")
async function handleGetAllUsers(req, res) {
    const allDBUser =await User.find({})
    return res.json(allDBUser)
}

async function handleGetUserByID(req, res) {
    const id = req.params.id
    const user = await User.findById(id)
    if(!user) return res.status(404).json({error:"user not found"})
    return res.json(user)
}  
async function handleUpdateUserByID(req, res) {
    const id = req.params.id
    const user = await User.findByIdAndUpdate(id,{lastName:req.body.last_name})
    if (user) {
        return res.status(202).json({status:"Success User updated",user})
    } else {
         return res.status(504).json({ status: "error" })
    }
} 
async function handleRemoveUserById(req, res) {
    const id = req.params.id
    const user = await User.findByIdAndDelete(id)
    if (user) {
        return res.json({status:"Success User deleted"})
    } else {
         return res.json({ status: "User not found" })
    }
}
async function handleCreateUserById(req, res) { 
    const body = req.body
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(404).json({ msg:'All fields are required'})
    }
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    });
    return res.status(201).json({msg:'Success',id:result.id})
}
module.exports = {
    handleGetAllUsers,
    handleGetUserByID,
    handleUpdateUserByID,
    handleRemoveUserById,
    handleCreateUserById
}