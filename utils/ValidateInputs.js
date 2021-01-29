export const ValidateInputDTO = (inputDto) => {
  const errors = [];
  const {rule, data} = inputDto;

//   checking if an element is an array or not
  function isArray(array) {
    return Object.prototype.toString.call(array) === '[object Array]';
}

    // Checking if the two main fields rule and data are undefined
    if(!rule || !data)
    {
        if (!rule)
        {
            errors.push({
                message: "rule is required.",
                status: "error",
                data: "null"
            });
        }

        if (!data)
        {
            errors.push({
                message: "data is required.",
                status: "error",
                data: "null"
            });
        }
    } else 
    {
        if(typeof rule != "object"){
            errors.push({
                message: "rule should be an object.",
                status: "error",
                data: "null"
            });
        }

        if(typeof data !== "object")
        {
            if(typeof data != "string"){
                if(!isArray(data))
                {
                    errors.push({
                        message: "data should be an object, array or a string.",
                        status: "error",
                        data: "null"
                    });
                }
            }
        }

        if(!rule.field){
            errors.push({
                message: "rule.field is required.",
                status: "error",
                data: "null"
            });
        }

        if(!rule.condition){
            errors.push({
                message: "rule.condition is required.",
                status: "error",
                data: "null"
            });
        }

        if(!rule.condition_value){
            errors.push({
                message: "rule.condition_value is required.",
                status: "error",
                data: "null"
            });
        }
    }
  
    // Checking if there is a rule field object
  return errors.length > 0 ? errors : [];
};
