/*
winston.js : Node.js 서버의 Log를 효율적으로 관리할 수 있게 도와주는 모듈
console.log, console.error는 실제 서버 운영 시 
서버가 종료되는 순간 쌓여있던 로그가 사라지고, 
console 객체의 메서드들이 언제 호출되었는지 파악하기가 힘들기 때문에
winston.js를 사용해서 로그를 외부로 파일에 저장해서 관리한다. 
*/
const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const fs = require('fs');

const env = process.env.NODE_ENV || 'development';
const logDir = 'log';

// 디렉토리가 없으면 디렉토리를 생성한다.
if (!fs.existsSync(logDir)) { //`${logDir}`라는 디렉토리가 없으면 
    fs.mkdirSync(logDir); // `${logDir}`라는 디렉토리를 생성한다.
}

const dailyRotateFileTransport = new transports.DailyRotateFile({
    level: 'debug',
    filename: `${logDir}/%DATE%-smart-push.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
});

const logger = createLogger({
    level: env === 'development' ? 'debug' : 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.json()
    ),
    transports: [
        new transports.Console({
            level: 'info',
            format: format.combine(
                format.colorize(),
                format.printf(
                    info => `${info.timestamp} ${info.level}: ${info.message}`
                )
            )
        }),
        dailyRotateFileTransport
    ]
});

module.exports = {
    logger: logger
};