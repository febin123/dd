const mongoose = require('mongoose')

const URL = 'mongodb+srv://febsep96:AbCd@1234@atlascluster.rbvqgqx.mongodb.net/resBilling'

mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})