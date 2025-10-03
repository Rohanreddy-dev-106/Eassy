import { server } from "./index.js";
import controller from "./src/controllers/eassy.controllers.js"
import { UplodeFile } from "./src/middlewares/file.uplode.config.js"
const PORT=3100;

server.get("/",controller.getHomepage);
server.get("/jobs",controller.jobdetails)
server.get("/job/:id",controller.jobview)
server.post("/apply/:id",UplodeFile.single("resume"),controller.getapplyformdata)
server.post("/search",controller.search_data)
server.listen(PORT,()=>console.log(`Server is Listening on PORT ${PORT}`))