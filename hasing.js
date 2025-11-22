
const crypto = require("crypto");

const md5hasing = crypto.createHash("md5").update("45687654").digest("hex"); // not alow 


console.log(md5hasing)

const sha256 = crypto.createHash("sha256").update("45687654").digest("hex")

console.log(sha256)

const sha512 = crypto.createHash("sha512").update("45687654").digest("hex")

console.log(sha512)