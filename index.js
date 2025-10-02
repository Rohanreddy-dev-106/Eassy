import express from "express";
import path from "path";
import Layout from "express-ejs-layouts"
const server=express();

//setup view engine settings
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

//All Application Level Middlewares
server.use(express.urlencoded({extended:true}));
server.use(Layout);
server.use(express.static("public"));
export {server}