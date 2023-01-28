const connectDB = require('./db/connect')
const express = require('express');
const app = express();
const IMagazineMgtRoutes = require('./routes/IMagazineMgt')
const IContributorMgt = require('./routes/IContributorMgt')
const IAdvertMgt = require('./routes/IAdvertMgt')
require('dotenv').config()



//middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>IT In The Valley API</h1><a href="/api-docs">Documentation</a>');
  });

//routes
app.get('/hello', (req, res)=>{
    res.send('IT in the valley server')
})

app.use('/api/v1/itinthevalley', IMagazineMgtRoutes)
app.use('/api/v1/itinthevalley', IContributorMgt)
app.use('/api/v1/itinthevalley', IAdvertMgt)


const port = process.env.PORT || 5000;

const start = async() =>{
    try {
        console.log('db is working');
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`app is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}
start()