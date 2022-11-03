import * as fs from 'node:fs/promises';

/*
* Jaya's elegant solution
*/
/* 
my instrs
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
// https://nodejs.org/api/fs.html
// https://nodejs.org/api/fs.html#fspromisesreadfilepath-options
// https://nodejs.org/api/fs.html#fsreadfilepath-options-callback
async function read(path) {
  try {
    let data = await fs.readFile(path, 'utf-8');
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

// Argument checking here if relevant.
//https://nodejs.org/api/fs.html#fspromisesreadfilepath-options
// https://nodejs.org/api/fs.html#fs_fspromises_access_path_mode

async function validatePath(path){
  try {
    await fs.access(path);
    return true;
  } catch(e) {
    return false;
  }
}

// https://nodejs.org/api/fs.html#fspromisesstatpath-options
// https://nodejs.org/api/fs.html#class-fsstats
// https://linux.die.net/man/2/fstat
async function isFile(path){
  try {
    let stats = await fs.stat(path);
    return stats.isFile();
  } catch (e) {
    return false;
  }
}
async function processData(data){
  let planets = JSON.parse(data);
  Object.entries(planets).forEach(([key, value]) => {
    if (value > planets["Earth"]) {
      console.log(key);
    }
  });
}

// alternate for
async function processData2(data){
  let planets = JSON.parse(data);
  console.log(`earth weighs ${planets["Earth"]}`)
  for (const planet in planets) {
    if (planets[planet] > planets["Earth"])  {
      console.log(`${planet} weighs ${planets[planet]}`)    
    }
  }
}

// https://nodejs.org/api/process.html
// https://nodejs.org/api/process.html#processexitcode

(async function() {
  let filename = "./planets.json";
  let valid = await validatePath(filename);
  if (valid) {
    let fileValid = await isFile(filename);
    if (fileValid) {
      let data = await read(filename);
      processData2(data);
    } else {
      console.error("File not found");
      process.exit(9);
    }
  } else {
    console.error("File not found");
    process.exit(9);
  }
})();
