export const ValidateFieldDTO = (inputDto) => {
    const errors = [];
    const verifiedData = [];
    const {rule, data} = inputDto;

    //   checking if an element is an array or not so incase user inputs arrasy to compare with the eq rule
  function isArray(array) {
    return Object.prototype.toString.call(array) === '[object Array]';
}
    // helper function to compare two array objects
    var isEqual = function (value, other) {

        // Get the value type
        var type = Object.prototype.toString.call(value);
    
        // If the two objects are not the same type, return false
        if (type !== Object.prototype.toString.call(other)) return false;
    
        // If items are not an object or array, return false
        if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;
    
        // Compare the length of the length of the two items
        var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
        var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
        if (valueLen !== otherLen) return false;
    
        // Compare two items
        var compare = function (item1, item2) {
    
            // Get the object type
            var itemType = Object.prototype.toString.call(item1);
    
            // If an object or array, compare recursively
            if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
                if (!isEqual(item1, item2)) return false;
            }
    
            // Otherwise, do a simple comparison
            else {
    
                // If the two items are not the same type, return false
                if (itemType !== Object.prototype.toString.call(item2)) return false;
    
                // Else if it's a function, convert to a string and compare
                // Otherwise, just compare
                if (itemType === '[object Function]') {
                    if (item1.toString() !== item2.toString()) return false;
                } else {
                    if (item1 !== item2) return false;
                }
    
            }
        };
    
        // Compare properties
        if (type === '[object Array]') {
            for (var i = 0; i < valueLen; i++) {
                if (compare(value[i], other[i]) === false) return false;
            }
        } else {
            for (var key in value) {
                if (value.hasOwnProperty(key)) {
                    if (compare(value[key], other[key]) === false) return false;
                }
            }
        }
    
        // If nothing failed, return true
        return true;
    
    };
    
    // checking if field.rule exists on the data object
    if(data.hasOwnProperty(rule.field))
    {
        switch (true) 
    {
        case rule.condition === "eq":
            if((data[rule.field] === rule.condition_value 
                || isEqual(data[rule.field], rule.condition_value)) 
                && data[rule.field] != undefined)
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

        case rule.condition === "neq":
            if(data[rule.field] !== rule.condition_value && data[rule.field] !== undefined){
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

        case rule.condition === "gt":
            if(typeof data[rule.field] != "number" && data[rule.field] !== undefined){
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
            } else 
            {  
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
  