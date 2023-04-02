const { Router } = require("express");
const { getAllUsers, createNewUser, deleteUser, updateUser } = require("../controller/customerController");

const router = Router();

module.exports = () => {


    router.get("/", getAllUsers)

    router.post("/", createNewUser)

    router.delete('/:id', deleteUser)

    router.put('/:id', updateUser)
    
    return router;
}