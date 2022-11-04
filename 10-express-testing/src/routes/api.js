/* 
* uses `Express.router` middleware to define middleware routes 
* for a `get` request to `/`. The route will look at `req.query` 
* to see if there is a property `name`; 
* if so, it sends a json response `{message: "Hello" + req.query.name}` 
* If not, send a 404 with json error message `{error: "not supported"}`
* @author PMCampbell
*/
import express from "express"
const router = express.Router();
function addname (req, res) {
  // stub
  console.log(req.body)
  res.status(201).json({ message: "added"})
}
/** 
* check the request 
* to see if there is a property `name`; 
* if so, it sends a json response `{message: "Hello" + req.query.name}` 
* If not, send a 404 with json error message `{error: "not supported"}`
* change to 201 ??
 */

function checkname (req, res) {
  /* 
  fix */
  if ('name' in req.query && req.query.name) {
    res.json({ message: "Hello " + req.query.name })
  } 
  res.status(404).json({ error: "not supported" })
}

/* 
  start with this
  if ('name' in req.query) {
    res.json({ message: "Hello " + req.query.name })
  } else {
    res.status(404).json({ error: "not supported" })
  }
  name= will return 200 / name=
*/
router.post("/addname", (req, res) => addname(req, res))
router.get("/", (req, res) => checkname(req, res))

// because I export as default, can name it anything on import
export default router