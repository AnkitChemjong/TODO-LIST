import db from '../connect/connect.js';

const getData=(req,res)=>{
   const sql='SELECT * FROM data';
    db.query(sql,(err,result)=>{
        if(err){
            res.json({message:`error creating the database:${err}`})
        }
        else{
            res.send(result);
        }
    })
}
export default getData;