const path = require('path'); 

console.log("file info \n")
console.log("file name",__filename)
console.log("diractori name",__dirname) 

const filepath = "/sahriyar/document/nextlevel.pdf"

console.log(filepath) ;

console.log("diryctori name :",path.dirname(filepath))
console.log("base name :",path.basename(filepath))
console.log("file extention name :",path.extname(filepath))
console.log("file name: " ,path.basename(filepath,path.extname(filepath)))

const parsed = path.parse(filepath);

console.log( "parsed obj:",parsed)

console.log("formeted path", path.format(parsed))