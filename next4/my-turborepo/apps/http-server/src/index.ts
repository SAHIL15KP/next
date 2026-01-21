import express from "express"
const app = express()

app.get("/signup" , (req,res)=>{
    res.send("hell")
})
app.listen(3001)