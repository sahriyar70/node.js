const os = require("os");

console.log("OS Type:", os.type());
console.log("OS Platform:", os.platform());
console.log("OS Version:", os.version());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("User Home Dir:", os.homedir());
console.log("System Uptime:", os.uptime());

const cpus = os.cpus()

console.log(cpus[0].model)
console.log("cpu core", cpus.length)
console.log ("cpu speed",cpus[0].speed)
console.log((os.totalmem()/1024/1024/1024).toFixed(2))