const express =require('express');
const app = express()

app.get("/api" , (req, res)=>{
    res.json({"users":["userone","userTwo" , "userThree","userFour"]})
})

app.listen(8000,()=>{console.log("server started on port 8000")})