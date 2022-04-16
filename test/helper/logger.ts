import winston from "winston"

// Format console.log
let mydate = new Date();
let Filename = './logs/' + mydate.getFullYear() + "-" + mydate.getMonth() + "-" + mydate.getDate() + "-" + mydate.getHours() + ':' + mydate.getMinutes() + ':' + mydate.getSeconds()+ "-combined.log";

const fileFormat = winston.format.printf(({ level, message, timestamp }) => {
    const logLevel = winston.format.colorize().colorize(level, `${level.toUpperCase()}`)
    return `${timestamp} [${logLevel}]: ${message}`;
  });

const consoleFormat = winston.format.printf(({ level, message
}) => {
    const logLevel = winston.format.colorize().colorize(level, `${level.toUpperCase()}`)
    return `[${logLevel}]: ${message}`
})
// Logger
let logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: process.env.LOG_LEVEL,
            handleExceptions: true,
            format: winston.format.combine(winston.format.timestamp(), consoleFormat)
        }),
        new winston.transports.File({ 
            filename: Filename, 
            level: process.env.LOG_LEVEL,
            handleExceptions: true,
            format: winston.format.combine(winston.format.timestamp(), fileFormat)
         })
    ]
})
// Print any unknown error
logger.on("error", error => {
    console.log("Unknown error in Winston logger")
    console.log(error.message)
})
export default logger
