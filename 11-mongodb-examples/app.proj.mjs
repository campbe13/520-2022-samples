// demo read from  a collection use projection

//import { gonzo, mupparray } from "./muppets.mjs"

import dotenv from "dotenv"
import { MongoClient } from "mongodb"
dotenv.config()
// you will put this into a class, inline for
// pedagogicaly purposes 

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
  let projection = { name: 1, "personal.age": 2 }
  const cursor = collection.find().project(projection)
  const array = await cursor.toArray()
  //console.log("array " + array)
  // console.log("read " + array.count) ?? undefined
  array.forEach(item => console.log(item))

  client.close();
})();