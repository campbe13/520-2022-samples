// demo manipulate a collection

//import { gonzo, mupparray } from "./muppets.mjs"

import dotenv from "dotenv"
import { MongoClient } from "mongodb"
dotenv.config()
let db
(async () => {
  try {
    // connect to server
    const client = new MongoClient(dbUri);
    await client.connect();
    console.log("client connected")

    // connect to db (create if does not exist)
    db = await client.db("demo").command({ ping: 1 })
    console.log("client.db connected ")
  } catch (e) {
    console.log(e)
  }
})();
// put code here to not continue if error in ^^ db connect
(async () => {
  // connect to collection (create if does not exist)
  const collection = await db.collection("mupps");
  // read

  const cursor = await collection.find()
  const array = await cursor.toArray()
  //console.log("array " + array)
  // console.log("read " + array.count) ?? undefined
  array.forEach(item => console.log(item))

  let query = { "personal.age": { $gt: 10 } };
  const older = await collection.find(query)
  console.log("after query age > 10  ")
  const olderarray = await older.toArray()
  // console.log("read " + olderarray.count) ?? undefined
  olderarray.forEach(item => console.log(item))

  client.close();
})();