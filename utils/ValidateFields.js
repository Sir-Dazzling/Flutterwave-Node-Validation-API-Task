export const ValidateFieldDTO = (inputDto) => {
    const errors = [];
    const verifiedData = [];
    const {rule, data} = inputDto;

    //   checking if an element is an array or not
  function isArray(array) {
    return Object.prototype.toString.call(array) === '[object Array]';
}
    // checking if field.rule exists on the data object
    if(data.hasOwnProperty(rule.field))
    {
        switch (true) 
    {
        case rule.condition === "eq":
            if(data[rule.field] === rule.condition_value && data[rule.field] != undefined){
                verifiedData.push({
                    message: `field ${rule.field} successfully validated.`,
                    status: "success",
                    data: {
                        validation: {
                            error: false,
                            field: rule.field,
                            field_value: `${data[rule.field]}`,
                            condition: `${rule.condition}`,
                            condition_value: `${rule.condition_value}`
                        }
                    }
                });
            } else{
                errors.push({
                    message: `field ${rule.field} failed validation.`,
                    status: "success",
                    data: {
                        validation: {
                            error: true,
                            field: rule.field,
                            field_value: `${data[rule.field]}`,
                            condition: `${rule.condition}`,
                            condition_value: `${rule.condition_value}`
                        }
                    }
                });
            }
            break;

        case rule.condition === "neq":
            if(data[rule.field] !== rule.condition_value && data[rule.field] != undefined){
                verifiedData.push({
                    message: `field ${rule.field} successfully validated.`,
                    status: "success",
                    data: {
                        validation: {
                            error: false,
                            field: rule.field,
                            field_value: `${data[rule.field]}`,
                            condition: `${rule.condition}`,
                            condition_value: `${rule.condition_value}`
                        }
                    }
                });
            } else{
                errors.push({
                    message: `field ${rule.field} failed validation.`,
                    status: "success",
                    data: {
                        validation: {
                            error: true,
                            field: rule.field,
                            field_value: `${data[rule.field]}`,
                            condition: `${rule.condition}`,
                            condition_value: `${rule.condition_value}`
                        }
                    }
                });
            }
            break;

        case rule.condition === "gt":
            if(typeof data[rule.field] != "number" && data[rule.field] != undefined){
                errors.push({
                    "message": `data.${rule.field} should be a number.`,
                    "status": "error",
                    "data": null
                });
            }
            
            if(data[rule.field] > rule.condition_value)
            {
                verifiedData.push({
                    message: `field ${rule.field} successfully validated.`,
                    status: "success",
                    data: {
                        validation: {
                            error: false,
                            field: rule.field,
                            field_value: `${data[rule.field]}`,
                            condition: `${rule.condition}`,
                            condition_value: `${rule.condition_value}`
                        }
                    }
                });
            } else {
                errors.push({
                    message: `field ${rule.field} failed validation.`,
                    status: "success",
                    data: {
                        validation: {
                            error: true,
                            field: rule.field,
                            field_value: `${data[rule.field]}`,
                            condition: `${rule.condition}`,
                            condition_value: `${rule.condition_value}`
                        }
                    }
                });
            }
            break;

        case rule.condition === "gte":
            if(typeof data[rule.field] != "number" && data[rule.field] != undefined)
            {
                errors.push({
                    "message": `data.${rule.field} should be a number.`,
                    "status": "error",
                    "data": null
                });
            }
            
            if(data[rule.field] >= rule.condition_value)
            {

                verifiedData.push({
                    message: `field ${rule.field} successfully validated.`,
                    status: "success",
                    data: {
                        validation: {
                            error: false,
                            field: rule.field,
                            field_value: `${data[rule.field]}`,
                            condition: `${rule.condition}`,
                            condition_value: `${rule.condition_value}`
                        }
                    }
                });
            } else 
            {
                errors.push({
                    message: `field ${rule.field} failed validation.`,
                    status: "success",
                    data: {
                        validation: {
                            error: true,
                            field: rule.field,
                            field_value: `${data[rule.field]}`,
                            condition: `${rule.condition}`,
                            condition_value: `${rule.condition_value}`
                        }
                    }
                });
            }
            break;

        case rule.condition === "contains":
            if(!isArray(data[rule.field]) && data[rule.field] !== undefined)
            {
                errors.push({
                    "message": `data.${rule.field} should be an array.`,
                    "status": "error",
                    "data": null
                });
            } else {
                
                if(data[rule.field].includes(rule.condition_value))
                {
                    verifiedData.push({
                        message: `field ${rule.field} successfully validated.`,
                        status: "success",
                        data: {
                            validation: {
                                error: false,
                                field: rule.field,
                                field_value: `${data[rule.field]}`,
                                condition: `${rule.condition}`,
                                condition_value: `${rule.condition_value}`
                            }
                        }
                    });
                } else
                {
                    errors.push({
                        message: `field ${rule.field} failed validation.`,
                        status: "success",
                        data: {
                            validation: {
                                error: true,
                                field: rule.field,
                                field_value: `${data[rule.field]}`,
                                condition: `${rule.condition}`,
                                condition_value: `${rule.condition_value}`
                            }
                        }
                    });
                }
            }
        default:
            break;
    }
    } else {
        errors.push({
            "message": `field ${rule.field} is missing from data.`,
            "status": "error",
            "data": null
        });
    }
      // Checking if there is a rule field object
    return errors.length > 0 ? errors : verifiedData;
  };
  