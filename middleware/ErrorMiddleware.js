// Handles an unknown route or method
export const notFound = (req, res, next) => 
{
    res.status(404);
    res.json({
      "message": `Not Found - ${req.originalUrl}`,
      "status": "error",
      "data": null
    });
};

export const errorHandler = (err, req, res, next) => 
{
   if (err instanceof SyntaxError && err.status === 400 && 'body' in err) 
   {
    res.status(500);
    res.json({
        "message": "Invalid JSON payload passed.",
        "status": "error",
        "data": null
    });
  }
};