const lowerCaseWords = array => {
    return new Promise((resolve, reject) => {
        try{
            const response = [] 
            array.forEach(item => {
                if (typeof(item) === "string"){
                    response.push(item.toLowerCase());
                }
            })

            resolve(response);

        } catch (err){
            reject("Something is wrong: ", err);
        }
    })
}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

console.log(lowerCaseWords(mixedArray));