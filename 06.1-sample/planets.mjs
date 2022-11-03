// "use strict"  module so by default

// maybe: https://www.perfomatix.com/nodejs-coding-standards-and-best-practices/
/* 
1. create dir
2. node init in dir
3. xyz.mjs (test package.json vs eslint)
------------------
must name it .mjs
or add to package.json      { "type" : "module" }
------------------
standard:
// all import statements at top
"use strict"
import blah from blah
// define functions
function main() {
  // driver code here
}

@ end of file call main()  or iife 
*/ 
import * as fs from 'node:fs/promises';

async function read(usePlanets, fn) {
  try {
    let data = await fs.readFile(fn, "utf-8");
    usePlanets(JSON.parse(data));
  } catch (err) {
    console.error(err.message);
  }
}
/*
https://nodejs.org/api/fs.html#fs_fspromises_access_path_mode
^ *nix also 
https://nodejs.org/api/fs.html#class-fsstats
note these are *nix commands / stats
https://nodejs.org/api/fs.html#fsstatpath-options-callback
*/
async function checkFile(fn) {
  let  tf = false
  try {
    // note file modes!
    // https://nodejs.org/api/fs.html#fspromisesconstants 
    // defaults to fs.constants.F_OK) 
    await fs.access(fn)   
    console.log("can access " + fn)
    tf = await checkStat(fn)    
  } catch(e) {
    console.error('cannot access ' + fn +  " " + e );
  } 
  
  console.log("checkfile: after await stat: tf " + tf)
  return tf ;
}

// https://nodejs.org/api/fs.html#fspromisesstatpath-options
// https://nodejs.org/api/fs.html#class-fsstats
// https://linux.die.net/man/2/fstat
async function checkStat(fn) {
  let tf
  await fs.stat(fn,  (err, stats) =>  { 
    if (err) {
      console.error('cannot access ' + fn +  " " + err );
    } else {
      tf  =  stats.isFile() 
      console.log("stats.isFile " + stats.isFile())
      tf = stats.isFile()
      console.log("can read file " + fn)
    }  
  });
  return tf
}

async function main() {

  let fn = "planets.json"
  // undefined == true  --- problem w checkFile()
  let tst = await checkFile(fn)
  console.log("checkFile returns:" + tst)
  //if (!checkFile(fn))  {
  if (tst)  {
    console.log("bye")
    return 1
  }
  read(usePlanets, fn)
}
function usePlanets(planets) {
  console.log(planets)
  let earthWeight  = planets["Earth"]
  if (earthWeight === undefined ) {
    console.log("Earth not found")
    return
  }
  console.log(`larger than earth at ${earthWeight}`)
  for ( const planet in planets)  {
    if (planets[planet] > earthWeight) {
      console.log(`planet ${planet} weighs ${planets[planet]}`)
    }
  }
}

main() 