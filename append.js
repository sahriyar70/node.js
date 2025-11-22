const fs = require('fs')

fs.writeFileSync("./output/app.log","aplication start\n");
console.log(" file creat")      

const logenry1 = `${new Date().toISOString()} user login \n`
 fs.appendFileSync("./output/app.log", logenry1)
