import { Router } from "express";
const routes = Router();


export default () => {

    routes.get("/", (req, res) => {
        res.json("get all products")
    })
    routes.get("/activeProducts", (req, res) => {
        res.json("get active products")
    })
    return routes;
}