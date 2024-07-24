import User from "../../model/seqModel.js";

const resetPassword=async (req,res)=>{
    const email=req.params.email;
    const {password}=req.body;
    try
    {
       const user=await User.findOne({where:{email:email}});
       const userSalt=user.salt;
       const newHashedPassword=createHmac('sha256',userSalt).update(password).digest('hex');
       user.password=newHashedPassword;
       user.resetSalt=undefined;
       user.resetToken=undefined;
       user.tokenExpirationDate=undefined;
       user.save();
       res.json({message: 'Password changed'})
    }
    catch(err){
     res.json({message:err.message});
    }
}

export default resetPassword;