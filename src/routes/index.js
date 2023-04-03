
import { Router } from "express";
// const {Router}=require("express")

import customerRoutes from "./customerRoutes";
import productRoutes from "./productRoutes";
const router = Router()

export default () => {
    router.use("/customers", customerRoutes())
    router.use("/product", productRoutes())
    return router;
}