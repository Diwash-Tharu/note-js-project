import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express();

// app . use is to use the middleware in the express framkewokr in the node.js
app.use(cors({
    origin :process.env.CORS_ORIGIN,
    credentials: true

}));

app.use(express.json({limit: "20kb"}))
//is is used foe the extended url of the url in the list
app.use(express.urlencoded({extended: true, limit: "20kb"}))

//this is the folder is its usde to store the asserts public is usde in the folder 
app.use(express.static("public"))
//this is used to parse the cookie in the express framwork
app.use(cookieParser())

export {app}
