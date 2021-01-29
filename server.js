import dotenv from "dotenv";
import express from 'express';
import morgan from 'morgan';
import { errorHandler, notFound } from './middleware/ErrorMiddleware.js';
import BaseRoutes from './routes/BaseRoute.js';
import ValidateRuleRoutes from './routes/ValidateRuleRoutes.js';
import colors from 'colors';

dotenv.config();

const app = express();

// To enable morgan logging during development
if(process.env.NODE_ENV === "development")
{
    app.use(morgan("dev"));
}

app.use(express.json());

app.use("/", BaseRoutes);
app.use("/validate-rule", ValidateRuleRoutes);

// Middlewares on Root of Api
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));