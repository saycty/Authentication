import express from "express";
import bodyParser from 'body-parser';
import usersRoutes from'./routes/users.js';
import DB from "./db.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

DB();

app.use('/users',usersRoutes)
app.get('/',(req,res)=>{
    // console.log('GET request received');
    res.send('Hello home page');
})

app.listen(PORT, () => console.log('server is running'));