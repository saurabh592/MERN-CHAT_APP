const dotenv = require('dotenv');
const express = require("express");
const { chats } = require("./data/data");
const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("api is running")
});
app.get('/api/chat', (req, res) => {
    res.send(chats)
});
app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find((c) => c._id == req.params.id);
    res.send(singleChat);
    console.log(singleChat);
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server has started ${PORT}`))