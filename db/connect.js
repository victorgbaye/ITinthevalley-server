const mongoose = require('mongoose')
mongoose.set('strictQuery', true)


const connectDB = (url) =>{
    mongoose.connect(url)
.then(()=>{
    console.log('CONNECTED TO THE DB...')
})
.catch((err)=>console.log(err))
}

module.exports = connectDB
