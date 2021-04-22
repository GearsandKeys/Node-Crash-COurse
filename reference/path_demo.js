const path = require('path');

//Base file name
console.log(path.basename(__filename));
// path_demo.js

//Directory name
console.log(path.dirname(__filename));
// C:\Users\Nathan\node_crash_course\reference

//File extension
console.log(path.extname(__filename));
// js

// Create path object
console.log(path.parse(__filename));
/* 
{
  root: 'C:\\',
  dir: 'C:\\Users\\Nathan\\node_crash_course\\reference',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo'
}
*/

//we can access any property with .notation
console.log(path.parse(__filename).name);
// path_demo

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))
// C:\Users\Nathan\node_crash_course\reference\test\hello.html
// This is good for delimiters