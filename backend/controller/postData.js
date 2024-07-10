import db from '../connect/connect.js';

const postData= async (req,res)=>{
    const {title,content}=req.body;
    const time=new Date().toISOString().slice(0, 19).replace('T', ' ');
    
    const sql='INSERT INTO data (title,content,createdTime) VALUES (?,?,?)';
    db.query(sql,[title,content,time],(err,result)=>{
                    if(err){
                        res.json({message:`error creating the database:${err}`})
                    }
                    res.send(result);
                })
  
}
export default postData;