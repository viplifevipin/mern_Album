const express=require('express')
const app=express()
const path=require('path')
const mongoose=require('mongoose')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const cors = require('cors');
const dotenv=require("dotenv")

dotenv.config()

mongoose.connect('mongodb://localhost:27017/vipinAlbum',{ useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
    if (err){
        throw err
    }
    else {
        console.log('done')
    }
})

const indexRouter=require('./routers/index')
const userRouter=require('./routers/user')

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
  }));
// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '/public/')));

const port=process.env.PORT || 3000

app.use('/',indexRouter)
app.use('/user',userRouter)

app.listen( port,() => {
    console.log(`Example app listening at http://localhost:${port}`)
  })