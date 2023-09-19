const express = require('express');
const dotEnv = require('dotenv');
const userRoute = require('./Routes/userRoutes');
const dbConnect = require('./Database/dbConnect');
const expressLayouts = require("express-ejs-layouts");
const sequelize  = require('sequelize');
const ejs = require('ejs');




dotEnv.config()

const port = process.env.PORT || 5000

const app = express()



app.set('view engine','ejs');
app.use(expressLayouts);
// app.use(express.urlencoded({extended: false}))

//middleware
app.use('/', userRoute);
app.use(express.static('public'))


// app.listen(port,() => {
//     console.log(`server connected on http://localhost:${port}`)
// })

// to load database first
const startServer = async()=>{
    try{
        // await Sequelize.authenticate();
        app.listen(port, ()=>{
            // Sequelize.authenticate()
            console.log(`server connected on http://localhost:${port}`)
        });
    }
    catch(e){
        console.log(e);
    }
};

startServer();