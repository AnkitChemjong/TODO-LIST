import db from '../connect/connect.js';

const updateData=(req,res)=>{
    const id=req.params.id;
    const {title,content}=req.body;
   const sql='UPDATE data SET title=(?),content=(?) WHERE Noteid=(?)';
    db.query(sql,[title,content,id],(err,result)=>{
        if(err){
            res.json({message:`error updating the note:${err}`})
        }
        else{
            res.send(`Note Updated of Id ${id}`);
        }
    })
}
export default updateData;