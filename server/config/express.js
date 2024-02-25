const express = require("express");
const compression = require("compression");
const methodOverride = require("method-override");
const cors = require("cors");
const helmet = require("helmet");

module.exports = function () {
  const app = express();

  /* 미들웨어 설정 */
  app.use(compression()); //HTTP 요청을 압축 및 해제
  app.use(express.json()); // body 값을 파싱
  app.use(express.urlencoded({ extended: true })); //form 으로 제출되는 값 파싱, Express 4.16 버전 이하에서는 body-parser 모듈을 불러와서 설정했으나, 이후 내장 모듈로 포함됐기 때문에 별도의 모듈을 설치할 필요는 없음.
  app.use(methodOverride()); // put, delete 요청 처리
  app.use(cors()); // 웹브라우저 cors 설정 관리
  app.use(helmet());

  /* 직접 구현해야 하는 모듈 */
  require("../src/routes/indexRoute")(app);

  return app;
};
