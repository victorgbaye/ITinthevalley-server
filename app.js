const connectDB = require('./db/connect')
const express = require('express');
const app = express();
const IMagazineMgtRoutes = require('./routes/IMagazineMgt')
const IContributorMgt = require('./routes/IContributorMgt')
const IAdvertMgt = require('./routes/IAdvertMgt')
require('dotenv').config()

// Swagger
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

//middleware
app.use(express.json())



//routes
app.get('/', (req, res) => {
    res.send('<h1>IT In The Valley API</h1><a href="/api-docs">Documentation</a>');
  });
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/api', IMagazineMgtRoutes)
app.use('/api', IContributorMgt)
app.use('/api', IAdvertMgt)


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