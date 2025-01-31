import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log("Database Connected"));
    
    const dbURI = process.env.MONGODB_URI; // Use as-is
    await mongoose.connect(dbURI, {
       
    });
};

export default connectDB;
