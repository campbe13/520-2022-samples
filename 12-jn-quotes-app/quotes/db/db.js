require("dotenv").config();
const dbUrl = process.env.ATLAS_URI;
const { MongoClient } = require("mongodb");

let instance = null;

class DB {
  constructor(){
    //instance is the singleton, defined in outer scope
    if (!instance){
      instance = this;
      this.client = new MongoClient(dbUrl);
      this.db = null;
      this.collection = null;
    }
    return instance;
  }

  async connect(dbname, collName) {
    if (instance.db){
      return;
    }
    await instance.client.connect();
    instance.db = await instance.client.db(dbname);
    console.log("Successfully connected to MongoDB database " + dbname);
    instance.collection = await instance.db.collection(collName)
  }

  async close() {
    await instance.client.close();
    instance = null;
  }

  async readAll() {
    return await instance.collection.projection({ _id: 0 }).toArray();
  }

  async create(quote) {
    return await instance.collection.insertOne(quote);
  } 

  async createMany(array) {
    let result = await instance.collection.insertMany(array);
    return result.insertedCount;
  }

}

module.exports = DB;