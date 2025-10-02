const resolvedPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const response = {"message": "delayed success!"};
            resolve(response); 
        }, 500)
    })
}

const rejectedPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const response = {"message": "delayed exception!"};
            reject(response); 
        }, 500)
    })
}

resolvedPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

rejectedPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    
