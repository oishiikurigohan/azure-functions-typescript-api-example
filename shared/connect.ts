import mongoose from "mongoose";
import * as dotenv from 'dotenv';

export default () => {
  const connect = () => {

    dotenv.config();

    let mongoOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      user: process.env.COSMODDB_USER,
      pass: process.env.COSMOSDB_PASSWORD,
      dbName: process.env.COSMOSDB_DBNAME,
      ssl: true
    };

    let uri = "mongodb://" + process.env.COSMOSDB_HOST + ":" + process.env.COSMOSDB_PORT;

    mongoose.connect(uri, mongoOptions)
      .then(() => console.log('Connection to CosmosDB successful'))
      .catch((err) => {
        console.log(err);
        process.exit(1);
    });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
}