import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connection estb to DB');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;