const express = require('express')
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute')
const dotenv = require('dotenv')
const app  = express()
dotenv.config()
app.use(express.json())

app.use('/users',userRoutes)

// if route not found

app.get('*',(req,res)=>{
    res.send("<h1>404 Page Not Found </h1>")
})


const PORT = process.env.PORT ||8081
mongoose.connect('mongodb://localhost:27017/parcelkoi', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
            app.listen(PORT,()=>{
                console.log(`Server Running at ${PORT}`)
            })
        })
        .catch(e=>{
            console.log(e)
        })
