import express from "express"
import myroutes from "./routes/api.js"
let app  = express()
/* 
ref
https://dawsoncollege.gitlab.io/520JS/2022-08/520-study/lectures/07_2_Express.html#middleware---static-files-and-paths
*/ 
// public for static files

app.use("/api", myroutes)
// anything other than /api goes to  ./public
app.use(express.static('public'));

app.use((req, res) => { 
  res.status(404).send("Sorry can't find that!") 
});

export default app

