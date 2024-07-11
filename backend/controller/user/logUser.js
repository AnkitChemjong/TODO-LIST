import User from '../../model/seqModel.js';


const logUser=async (req,res)=>{
    try{

        const {email,password}=req.body;
        const user=await User.getUser(email,password);
        req.session.user=user;
        res.send(user);
    }
    catch(err){
        console.log("error getting user"+err);
    }
}
export default logUser;