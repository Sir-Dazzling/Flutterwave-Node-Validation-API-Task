export const ValidateFieldDTO = (inputDto) => {
    const errors = [];
    const verifiedData = [];
    const {rule, data} = inputDto;

    switch (true) 
    {
        case rule.condition === "gte":
            console.log("rule ", rule.field);
            console.log("rule ", typeof data[rule.field]);

            if(typeof data[rule.field] != "number" && data[rule.field] != undefined){
                errors.push({
                    "message": `data.${rule.field} should be a number.`,
                    "status": "error",
                    "data": null
                });
            }
            
            if(data[rule.field] >= rule.condition_value){

                verifiedData.push({
                    message: `field ${rule.field} successfully validated.`,
                    status: "success",
                    data: {
                        validation: {
                            field_value: `${data[rule.field]}`,
                            condition: `${rule.condition}`,
                            condition_value: `${rule.condition_value}`
                        }
                    }
                });
            }
    
        default:
            break;
    }
  
      // Checking if there is a rule field object
    return errors.length > 0 ? errors : verifiedData;
  };
  