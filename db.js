
import mongoose from "mongoose";

const DB = async (mongoURI) => {
    if (!mongoURI) {
        // throw new Error('MongoDB connection string is not defined.');
        res.send('database not matched');
    }
    await mongoose.connect(mongoURI, {
    });

    console.log('Connected to MongoDB');

};

export default DB;
