const express = require('express');
const cors = require('cors');
const middleware = require('./Middleware/middleWare');

const { addInfo, getInfo } = require('./fire.js');

const app=express()
app.use(cors());
app.use(express.json())

app.post("/login",(req, res)=>{
    console.log(req.body)
})
app.get("/dash",middleware.decodeToken,(req, res)=>{
    getInfo(req.headers.uid).then((rawData)=>{
        res.send(rawData.data())
    }).catch(err=>{console.log(err)})
})

app.post('/dash',middleware.decodeToken,(req,res)=>{

    addInfo(req.user.uid, req.body)
    res.sendStatus(200)
})


port=5000

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});

