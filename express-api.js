const fs = require('fs');
const express = require('express');
const app = express();
const port = 8500;
const users = require('./MOCK_DATA.json');
const { log } = require('console');


app.use(express.urlencoded({extended: false}));
// Get User Data

app.get("/api/users", (req, res) => {
    return res.json(users) ;
})

app.post(("/api/users"),(req,res) => {
    //Create New User
    const body = req.body;
    users.push({...body, id_number: users.length +1});
    
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        return res.json({status: `User with ID: ${users.length} has been added.`})
    })
})





app
.route("/users/:id")
.get((req, res) => {
    const userId = Number(req.params.id);
    const user = users.find( (user) => user.id_number === userId);
    res.json(user)
})
.patch((req,res) => {
    //Updating/Editing User
    return res.json({status: pending})
})
.delete((req,res) => {
    //Deleting User
    return res.json({status: pending})
})


app.listen(port, () => {
    console.log("Server listening");
})