const fs = require('fs');
const path = require('path');

// Defaults as asynchronous

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
    if(err) throw err;
    console.log("Folder created...")
});


//Create and write to files
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 
'Hello World!', (err) => {
    if(err) throw err;
    console.log("File written to...")

    //File append (Because writeFile overwrites the previous text)
    //Needs to be in the callback
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 
    ' Goodbye World!', (err) => { //don't forget the space for appending
        if(err) throw err;
        console.log(" File appended to...") 
    });
});
// Could also use a variable for writing to the file instead of 'Hello World!'
const text = "Hello world from a variable!"

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});


// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'world.txt'), (err) => {
    if(err) throw err;
    console.log("File renamed...")
});