const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const dbClient = new MongoClient(process.env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await dbClient.connect();
    // Send a ping to confirm a successful connection
    await dbClient.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(err){
    console.log(`Something bad happen: ${err}`);
  }
}

module.exports = {connectDB, dbClient};
