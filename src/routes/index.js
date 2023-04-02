const {Router}=require("express")
const customerRoutes = require("./customerRoutes")
const productRoutes = require("./productRoutes")
const router=Router()


module.exports=()=>{
    router.use("/customers",customerRoutes())
    router.use("/product",productRoutes())
    return router;
}