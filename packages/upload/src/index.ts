import express from "express"
import cors from "cors"
import { generateRandomID } from "./utils/random";
import simpleGit from "simple-git";
import path from "path";
import { getALLFiles } from "./utils/file";
const app =express();

app.use(cors());
app.use(express.json());
console.log(path.join(__dirname,`output/ransdj&^%&JKH`));

app.post("/upload", async (req, res) => {
  const { repourl } = req.body;
  const id = generateRandomID();

  const outputPath = path.join(process.cwd(), "uploads", id);

  await simpleGit().clone(repourl, outputPath);
 
  const files =getALLFiles(path.join(process.cwd(), "uploads", id));
  console.log(files);
  

  res.json({ id });
});





const port=3000;

app.listen(port,()=>console.log(`server start at port ${port}`));


