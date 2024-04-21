const express = require("express")

const app = express()

const PORT = 8000
const Hello = [{fist: "hiiiii"}]
app.get("/api",(req,res)=> {
    res.json(Hello)
})

app.listen(PORT, ()=> console.log(` >>>> server is running on port ${PORT} and is listening for REQuest and RES <<<< `))



