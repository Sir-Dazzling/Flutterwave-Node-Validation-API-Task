import express from 'express';
import colors from 'colors';
import dotenv from "dotenv";
import morgan from 'morgan';

import BaseRoutes from './routes/BaseRoute.js';

dotenv.config();

const app = express();

// To enable morgan logging during development
if(process.env.NODE_ENV === "development")
{
    app.use(morgan("dev"));
}

app.use(express.json());

app.use("/", BaseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));