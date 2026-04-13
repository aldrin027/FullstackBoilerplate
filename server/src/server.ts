import express from 'express';
import { MongoClient } from 'mongodb';




const PORT = 3001;

const app = express();

app.use(express.json());

console.log('first love: ', process.env.MONGO_URI);


// Initialize DB connection
const client = new MongoClient(process.env.MONGO_URI as string);
// const dbName = 'mydb';


app.use(async (req, res, next) => {

  try {
    if(['/', '/health'].includes(req.path)) {
      return next();
    }
    await client.connect();
    console.log('Connected successfuly');
    next();
  }catch(e) {
    console.log('Database error: ', e);
    res.status(500).send({
      message: 'Database connection is lost.'
    })
  }

})
  
    // Routes
    app.use('/health', (req, res) => {
      res.send('SERVER is fine.')
    })

    app.get('/paloma', (req, res) => {
      res.send('PALOMANGINA')
    })


    app.use('/', (req, res) => {
        res.send('Backend Boilerplate v1.0.0')
    });


    //   // Global error handler (should be after routes)
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });