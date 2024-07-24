import User from "../../model/seqModel.js";
import {createHmac,randomBytes} from 'crypto';

const checkResetToken =async (req,res) =>{
   const email=req.params.email;
   const {token}=req.body;
   try
   {
      const user=await User.findOne({where:{email:email}});
      const userSalt=user.resetSalt;
      const getToken=createHmac('sha256',userSalt).update(token).digest('hex');
      if(getToken===user.resetToken){
        res.json({message:"Token matched"});
      }
      else{
        res.json({message:'Invalid token'});
      }
      
   }
   catch(err){
    res.json({message:err.message});
   }
}

export default checkResetToken;