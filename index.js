// loads .env file content 
require('dotenv').config()
const express = require('express') 
const cors = require('cors')
const router =require('./Routes/router')
require('./DB/Connection') 


// express server
const wpServer = express()

// use cors in server
wpServer.use(cors())

// use json parse
wpServer.use(express.json())

// use router
wpServer.use(router) 

// file server to other application
wpServer.use('/adminPhotos',express.static('./adminPhotos'))

const PORT = 3000 || process.env.PORT 

// to host wpServer : locallhost:3000 

wpServer.listen(PORT,()=>{
    console.log(`Wall Paint Server Started At Port:${PORT}`);
}) 

//  to resolve get http req to http://localhost:3000/
wpServer.get('/',(req,res)=>{
    res.send("<h1>Wall Paintserver started...</h1>") 
})

