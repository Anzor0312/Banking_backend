const mongoose= require('mongoose');
const express=require('express');

const UserRouter = require('./router/user');
const app=express();
app.use(express.json());

app.use(express.urlencoded({extended:true}));
// mongoose.set('strictQuery', true);
// mongoose.connect('mongodb://127.0.0.1/users');
// mongoose.connection.on('open',()=>{
//     console.log('CONNECTED TO DATABASE SUCCESSFULLY');
// });

// mongoose.connection.on('erroк',()=>{
//     console.log('ERROR ON CONNECTION TO DATABASE');
// });
// app.use('user',UserRouter);
// app.get('/',(req,res)=>{
//     res.sendFile("hello ishladi");
// })


var cards=[];
app.post("/cards",(req,res)=>{
    app.use(express.urlencoded({extended:true}));
    cards.push(req.body);
    res.send({
        "status":true,
        "message":"Card successfully added"
    });



    
});
app.get('/card',(req,res)=>{
    res.send(cards);
});



app.listen(3000,'192.168.0.103',()=>{
    console.log("http://192.168.0.103:3000");
})