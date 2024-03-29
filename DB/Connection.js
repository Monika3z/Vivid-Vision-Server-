const mongoose = require('mongoose')

const connectionString = process.env.CONNECTION_STRING

mongoose.connect(connectionString).then(()=>{
    console.log("mongoDB Atlas connected successfully with wpServer");
}).catch((reason)=>{
    console.log(reason);
    console.log("mongoDB connection failed");
})