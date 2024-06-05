//require("dotenv").config({ path: "./env"});
import dotenv from "dotenv";
// import mongoo from "mongoose";
// import { mongo } from "mongoose";
//import { connect } from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "../src/db/index.js";

dotenv.config({ 
    path: "../env"
})

connectDB();


// another approach of the linking of the code

// import express from "express";
// const app = express();
// ;(async() => {
// try{
//    // await connect("mongodb://localhost:27017/yourdb", { useNewUrlParser: true });
//     await mongoo.connect('${process.env.mangoBD_url}/${DB_NAME}');
//    app.on("error", (err) => {
//     console.log("Error starting the server", err);
//     throw new Error("Error starting the server");
//     })

//     app.listen(process.env.PORT, () => {
//         console.log("Server started on http://localhost:3000");
//         {process.env.PORT}    
//     })
// }
// catch(err){

//     console.log("Error connecting to the database", err);
//     process.exit();
// //   connect("mongodb://localhost:27017/yourdb", { useNewUrlParser: true })
// //   .then(() => {
// //     console.log("Connected to the database");
// //   })
// //   .catch((err) => {
// //     console.log("Error connecting to the database", err);
// //     process.exit();
// //   });
//     }
// })()