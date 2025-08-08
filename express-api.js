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
    return res.json({status: "Pending"})
})
.delete((req,res) => {
    //Deleting User
    const userId = Number(req.params.id);   
    const userExist = users.some((user) => user.id_number === userId)
    if(!userExist) {
        return res.status(404).json({error: "User Not Found!"})
    }

    const userUpdate = users.filter((user) => user.id_number !== userId);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(userUpdate, null, 1), (err) => {
        if (err) {
            return res.status(500).json({error: "Failed to delete User"})
        }
        return res.json({status: `User with ID: ${userId} DELETED`})
    })
})


app.listen(port, () => {
    console.log("Server listening");
})