import { Router } from "express";
const { getAllUsers, createNewUser, deleteUser, updateUser } = require("../controller/customerController");

const router = Router();

export default () => {


    router.get("/", getAllUsers)

    router.post("/", createNewUser)

    router.delete('/:id', deleteUser)

    router.put('/:id', updateUser)

    return router;
}