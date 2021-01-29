import asyncHandler from 'express-async-handler';
import { ValidateFieldDTO } from '../utils/ValidateFields.js';
import {ValidateInputDTO} from '../utils/ValidateInputs.js';

// @description validating data
// @route POST /validate-rule
// @access Public
export const validateData = asyncHandler(async(req, res) => 
{
    const errors = ValidateInputDTO(req.body);

    if (errors && errors.length > 0)
    {
        res.status(400);
        res.json(errors);
    } else 
    {
        const fieldErrors = ValidateFieldDTO(req.body);
        res.send(fieldErrors);
    }
});
