import express from "express";
import User from "../schema.js";
const router = express.Router();

//get request//
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        if (!users || users.length === 0) {
            return res.send("No users found" );
        }
        res.status(200).json(users);
    } catch (err) {
        console.error(err.message);
        res.send(error);
    }
});

//post request(reg.)//
router.post("/reg", async (req, res) => {
    try {
        const { username, password } = req.body;
        const allUser = await User.findOne({ username });
        if (allUser) {
            return res.json({ error:'already have' });
        }

        const user = new User({
            username,
            password
        });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error(error.message);
        res.status.json({ error: ' error', details: error.message });
    }
});

//login
router.post('/log', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(401).json({ msg: 'User doesnot exist' });
        }else if(user.password == password){
            res.json({ message: 'Login successful', user });
        }else{
            return res.status(401).json({ msg: 'Invalid credentials.' });
        }
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send("error")
    }
})



export default router;
