const express=require("express");
const { createUser, getUsers, updateUser, deleteUser }=require("./controller");
const router=express.Router();
const cors=require("cors");

router.use(
    cors({
        credentials: true,
        origin: process.env.API_URL
    })
)

router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.get("/get", getUsers);
router.delete("/delete/:id", deleteUser);

module.exports=router;