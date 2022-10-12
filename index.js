const express = require("express");
const app = express();
const port = parseInt(process.env.PORT) || 3000;

app.get('/',(req,res) => {
    try{
        res.json({
            status : 200,
            msg: "You are home"
        })
    }catch (e){
        res.json({
            status : 400,
            msg : "Could not get homepage"
        })
    }
})

app.listen(port,(err) => {
    if(err){
        console.log(err)
    }else{
        console.log(`Sever is running on http://localhost:${port}`)
    }
})
