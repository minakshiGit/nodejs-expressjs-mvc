const fs = require("fs")
function logReqRes(filename) {
   return (req, res, next) => {
    const log = `${Date.now()}: ${req.ip}  ${req.method}  ${req.url} New Request received\n`
    fs.appendFile(
        filename, log, (err, data) => {
            next()
        }
    );
    }
}
module.exports = {
    logReqRes,
}