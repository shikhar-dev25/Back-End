const fs = require('fs');
const path = require('path');
const { existsSync, writeFile } = fs;
const { basename } = path;
const { log, error } = console;



const notesFile = path.join(__dirname, 'notes.txt');

if (existsSync(notesFile)) {
    console.log("Notes File exists in the directory");
} else {
    writeFile("Notes.txt", "this is the temporary notes file", (err) => {
        if (err) throw err;
        console.log("Notes File didn't exist in the directory.\nNotes File Created!");
    });
}

const parsedPath = path.parse('Home/user/foder/file.txt');
console.log(parsedPath);
