const index = require("../controllers/indexController");

module.exports = function (app) {
  app.get("/", index.greeting);
  app.get("/resume/:resumeId", index.readResumeInfoByResumeId);
};
