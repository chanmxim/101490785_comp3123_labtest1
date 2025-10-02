const fs = require("fs");
const path = require("path");

const directoryPath = path.join(process.cwd(), "Logs");

function RemoveLogFiles(){
    try{
        // Check if directory exists
        if (fs.existsSync(directoryPath)){
            const files = fs.readdirSync(directoryPath);
            
            // Delete files
            files.forEach(file => {
                const filePath = path.join(directoryPath, file);
                fs.unlinkSync(filePath);
                console.log("delete files..." + file);
            })

            // Delete directory
            fs.rmdirSync(directoryPath);
        }

    } catch (err){
        console.log("Error: ", err)
    }
}

function createLogFiles(){
    try{
        // Check if directory exists and create a new one if it doesnt
        if(!fs.existsSync(directoryPath)){
            fs.mkdirSync(directoryPath)
        }

        // Change the current process
        process.chdir(directoryPath);


        // Create log files and write smth inside these files
        for (let i = 0; i < 10; i++){
            const fileName = `log${i}.txt`;

            fs.writeFileSync(fileName, "Some content")
            console.log(fileName)
        }
    } catch (err){
        console.log("Error: ", err)
    }
}

createLogFiles();
RemoveLogFiles();