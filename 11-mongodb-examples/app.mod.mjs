// demo manipulate a collection

//import { gonzo, mupparray } from "./muppets.mjs"

import dotenv from "dotenv"
import { MongoClient } from "mongodb"
dotenv.config()
const dbUrl = process.env.ATLAS_URI;
// console.log(dbUrl)
const client = new MongoClient(dbUrl);
// if you get a timeout you might be missing the IP addr in mongo access list
await client.connect();
console.log("client connected")

// connect to db (create if does not exist)
const db = client.db("demo");
console.log("client.db ")


// connect to collection (create if does not exist)
const collection = await db.collection("mupps");
// read

const cursor = await collection.find()
const array    = await cursor.toArray()
//console.log("array " + array)
// console.log("read " + array.count) ?? undefined
array.forEach( item => console.log(item))

let query = { "personal.age" : { $gt : 10 }}  ;
const  older = await collection.find(query) 
console.log("after query ")
const olderarray = await older.toArray()
// console.log("read " + olderarray.count) ?? undefined
olderarray.forEach( item => console.log(item))

client.close();