// 1. Import winston module 
const winston = require('winston');

// 2. Logging configuration
const logConfiguration = {
    'transports': [
        new winston.transports.File({
            filename: 'src/logs/task.log'
        })
    ],
  
    format: winston.format.combine(
        
        winston.format.timestamp({
           format: 'MMM-DD-YYYY HH:mm:ss'
       }),
       
       winston.format.simple()
    )

  

};

// 3. Create logger object
const logger = winston.createLogger(logConfiguration);

module.exports = logger;