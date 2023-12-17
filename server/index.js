const express = require("./config/express");
const { logger } = require("./config/winston"); //log

const port = 5999;

express().listen(port);
logger.info(`API Server Start At Port ${port}`);
