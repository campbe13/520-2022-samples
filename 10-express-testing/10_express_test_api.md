---
title:  'Exercise 10.1 - Write and test a simple Express web API with router'
author:
- Jaya Nilakantan, Patricia Campbell
- 420-520-DW
---

Goal: Use Express to serve static and dynamic data, unit test with Jest and Supertest

# Reminders 

This lab exercise is good practice for Test 3.

# Requirements and Instructions

You will be creating an Express application with the following requirements. 

* create a new folder, and `npm init -y`
* install jest and supertest for development only, and update `package.json` for the test script
* install Express
* if desired, install nodemon globally
* copy the `.gitignore` and `.eslintrc.json` used in 520-Web to the root of the directory. Change the parserOptions sourceType to "module" 
* create folders ``__tests__``, `public` and `routes`, as well as `bin`
* create file `routes/api.js` that uses `Express.router` middleware to define middleware routes for a `get` request to `/`. The route will look at `req.query` to see if there is a property `name`; if so, it sends a json response `{message: "Hello" + req.query.name}` If not, send a 404 with json error message `{error: "not supported"}`
* create file `app.js` that uses the router middleware for the route "/api", and serves static files out of the `public` folder. All other routes have a 404 with json error message `{error: "not supported"}`
* unit test the `app.js` route `/api` using Supertest
* in the `public` folder, place any random `index.html` file
* create file `bin/www` (www is js file without an extension) that requires  `app` and starts listening on port 3000
* update `package.json` so the start script is `"start": "node ./bin/www"`. Start the server by running `npm run start`
* with a browser, go to localhost:3000 - you should see your random html
* now browse to localhost:3000/api - you should see the json response

