import User from '../../model/seqModel.js';


const createUser=async (req,res)=>{
    try{

        const {userName,email,password}=req.body;
        const user=await User.create({userName,email,password});
        res.send(user);
          console.log(req.user);
    }
    catch(err){
        console.log("error creating user"+err);
    }
}
export default createUser;