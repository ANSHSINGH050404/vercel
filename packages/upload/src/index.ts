import express from "express"
import cors from "cors"
import { generateRandomID } from "./utils/random";
import simpleGit from "simple-git";
const app =express();

app.use(cors());
app.use(express.json());

app.post('/upload',async(req,res)=>{
    const repourl= req.body.repourl;
    const id=generateRandomID();
    await simpleGit().clone(repourl,`output/${id}`);

    res.json({
        id
    });
})




const port=3000;

app.listen(port,()=>console.log(`server start at port ${port}`));


