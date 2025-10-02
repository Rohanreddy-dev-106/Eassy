import { server } from "./index.js";

const PORT=3100;

server.get("/",(req,res,next)=>{
    res.json({"Name":"Rohan","Port":3100});
})
server.listen(PORT,()=>console.log(`Server is Listening on PORT ${PORT}`))