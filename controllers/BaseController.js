import asyncHandler from 'express-async-handler';

// @description Displaying my information on base route
// @route GET /
// @access Public
export const getMyInfo = asyncHandler(async(req, res) => 
{
    res.json({
        "message": "My Rule-Validation API",
        "status": "success",
        "data": {
            "name": "Otti Daniel",
            "github": "@Sir-Dazzling",
            "email": "ottidan20@gmail.com",
            "mobile": "08091764286",
            "twitter": "@Sir_dazzling"
        }
    });
});
