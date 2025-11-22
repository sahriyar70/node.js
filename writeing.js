const { log } = require("console")
const fs = require("fs")

const content1 = "this is a content \n node js module "
try {
    fs.writeFileSync("./output/test.txt ", content1)
    console.log("first")

} catch(err)
{
    console.error(err.massage);
    

}