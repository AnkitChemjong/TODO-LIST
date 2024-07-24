import User from "../../model/seqModel.js";
import {randomBytes,createHmac} from 'crypto';
import mailTrap from "./mailTrap.mjs";



const genResetToken = async (req,res)=>{
    const {email}=req.body;
 const user=await User.findOne({where: {email: email}});
 if(user){
      const token=randomBytes(10).toString('hex');
      const resetSalt=randomBytes(10).toString('hex');
      const hashedToken=createHmac('sha256',resetSalt).update(token).digest('hex');
      user.resetSalt=resetSalt;
      user.resetToken=hashedToken;
      user.tokenExpirationDate=Date.now()+10*60*1000;
      await user.save();
      try{
          console.log(user.dataValues);
          await mailTrap(email,token);
          res.json({message:"Token sent to your email address"})
      }
      catch(error){
        user.resetSalt=undefined;
        user.resetToken=undefined;
        user.tokenExpirationDate=undefined;
        res.send(error);
      }
 }
 else{
    res.json({message:"User of that email is not available"})
 } 
};

export default genResetToken;