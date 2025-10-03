import multer from "multer";

const storageconfig=multer.diskStorage({
    destination:(req, file, cb)=>{
         cb(null, "public/data")
    },
    filename: (req, file, cb) => {
        const file_Name = Date.now().toString().concat("_", file.originalname);
        cb(null, file_Name);

    }
})
export const UplodeFile = multer({
    storage: storageconfig,
})