import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
        const connectionInstance= await mongoose.connect(`${process.env.MANGODB_URL}/${DB_NAME}`)
        console.log(`\n Connected to the database:${connectionInstance.connection.host}` );
    }
    catch(err){
        console.log("Error connecting to the database", err);
        process.exit(1);
    }
}

export default connectDB;

