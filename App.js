const express = require('express');

const app = express();


app.get('/', function (req,res){
    // res.json({name:"KUNAL"});
    res.send("<h1>EXPRESS</h1>")
})

app.get('/api', function (req,res){
    res.json({name:"KUNAL"});
    res.send("<h1>This is API</h1>")
})

app.get('/main', function (req,res){
    // res.json({name:"KUNAL"});
      res.send("<h1>Hii KD</h1>")
})



app.listen(5000)