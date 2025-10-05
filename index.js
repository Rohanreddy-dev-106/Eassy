import express from "express";
import path from "path";
import Layout from "express-ejs-layouts"
import session from "express-session";
import cookieParser from "cookie-parser";
const server=express();

//setup view engine settings
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

//All Application Level Middlewares
server.use(express.urlencoded({extended:true}));
server.use(Layout);
server.use(express.static("public"));

//Express middleware to  Make sessions
server.use(session({
    
    secret:"mykey",
    resave:false,
    saveUninitialized:false,
    cookie:{secure:false}
}))
server.use(cookieParser())
export {server}
