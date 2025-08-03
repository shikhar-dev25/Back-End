const { log } = require('console');
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

fs.rename('Notex.txt', 'TempNotes.txt', (err) => {
    if (err) throw err;
    console.log('File Renamed');
});

fs.rename('node_js_modules', 'node_modules', () => {
    console.log('Done');
});

const newServer = http.createServer((req, res) => {
    const logFiles = `${Date.now()}: New request\n`;
    fs.appendFile("Notex.txt", logFiles, (err, data) => {
        res.end("Server Ended!!");
    });
});

const port = 8000;
newServer.listen(port, () => {
    console.log("Server listening");
});

const myURL = url.parse("https://chatgpt.com/c/687909b7-5854-8002-82d4-c4b81c41c57c");
console.log(myURL);
