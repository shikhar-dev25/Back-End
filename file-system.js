const fs = require('fs');


//Write File
fs.writeFile('notes.txt', '\ntemporary notes', (err) => {
    if(err) throw error;
    console.log('Work Done!');
});

//Append File
fs.appendFile('notes.txt', '\nSecond line', (err) =>{
    if(err) throw error;
    console.log('New Line appended');
})

//Read File
fs.readFile('notes.txt', 'utf-8', (err, data) => {
    console.log(data);
})

//Delete File
fs.unlink('notes.txt', () => {
    console.log('File Deleted Successfully!');
})

//Create Folder
fs.mkdir('notes', (err) => {
    console.log("Folder Created!");
})

//Write File inside Folder
fs.writeFile('./notes/nodejs notes.txt', 'utf-8', (err) => {
    console.log("File Created!");
})

//To delete folder - fs.rmdir

