//mongodb+srv://sayanchakrabortty3:1234@cluster0.kihl4gs.mongodb.net/?retryWrites=true&w=majority

import mongoose from "mongoose";
 
const DB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://sayanchakrabortty3:1234@cluster0.kihl4gs.mongodb.net/?retryWrites=true&w=majority');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default DB;  