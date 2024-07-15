import multer from 'multer';
import path from 'path';


const storage=multer.diskStorage({
     destination:(req,file,cb)=>{
        const dest=path.resolve('./upload/');
        return cb(null,dest);
     },
     filename:(req,file,cb)=>{
        const name=`${Date.now()}-${file.originalname}`;
        return cb(null,name);
     }
});

const upload=multer({storage:storage});
export default upload;