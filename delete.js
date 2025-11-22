const fs = require("fs")

fs.writeFileSync("./output/temp.txt","this is temp file")  // create file
console.log(" temp file")

if(fs.existsSync("./output/temp.txt")){  // check file exist
    console.log("file exist")

fs.unlinkSync("./output/temp.txt")   // delete file 
     console.log('file delete')     
    
}  