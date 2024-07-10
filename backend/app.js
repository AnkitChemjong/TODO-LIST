import express from 'express';
import cluster from 'cluster';
import dotenv from 'dotenv';
import router from './routes/route.js';
import os from 'os';
import cors from 'cors';
dotenv.config();

const cpuLen=os.cpus().length;
if(cluster.isPrimary){
    for(let i=0; i<cpuLen; i++){
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
}
else{
    const app= express();
    const port=process.env.PORT ||8000;
    app.use(express.json())//for json data
    app.use(express.urlencoded({extended:false}));//for forms
    app.use(cors({
        origin:process.env.FRONT,
        methods:['GET', 'POST', 'PUT', 'DELETE','PATCH'],
        allowedHeaders:['Content-Type','Authorization'],
        credentials:true
    }));
    app.use('/',router);
    
    app.listen(port,()=>{

        console.log('listening on port:'+port+':'+process.pid);
    })
}


