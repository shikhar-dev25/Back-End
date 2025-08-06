const express = require('express');
const app = express();
const port = 8800;

const middleware = (req, res, next) => {
    console.log(Date.now());
    next();
}

app.use(middleware);

app.get("/", (req, res) => {
    res.send("Home Page") 
});

app.get("/about", (req, res) => {
    res.send("About Page") 
});

app.get("/Projects", (req, res) => {
    res.send("Projects Page") 
});



app.listen(8800, () => {
    console.log(`Port: ${port} Listening`);
    
})

