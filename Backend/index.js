const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./connect/mongoose');

connectDB();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/',require('./routes/login_saving'));

app.get('/',(req,res)=>{
    res.send("h");
});

app.listen(4000,()=>{
    console.log("Listening on port 4000");
})