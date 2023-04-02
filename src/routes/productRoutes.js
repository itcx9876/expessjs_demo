const {Router}=require("express");

const routes=Router();


module.exports=()=>{

    routes.get("/",(req,res)=>{
        res.json("get all products")
    })
    routes.get("/activeProducts",(req,res)=>{
        res.json("get active products")
    })
    return routes;
}