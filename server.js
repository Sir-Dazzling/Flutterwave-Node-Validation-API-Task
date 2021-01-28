import express from 'express';
import colors from 'colors';
import dotenv from "dotenv";
import morgan from 'morgan';

dotenv.config();

const app = express();

// To enable morgan logging during development
if(process.env.NODE_ENV === "development")
{
    app.use(morgan("dev"));
}

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("API is running....");
}); 

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));