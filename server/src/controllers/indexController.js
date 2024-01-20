const { pool } = require("../../config/database");
const { logger } = require("../../config/winston");
const secret = require("../../config/secret");
const indexDao = require("../dao/indexDao");

exports.greeting = async function (req, res) {
  return res.send("안녕하세요! 혜림의 이력서 API 서버입니다!");
};

// resumeId를 경로 변수로 받아서 이력서 정보를 조회 (이름, 주소, 휴대폰번호, 이메일, 프로필사진, 이력서제목, 짧은 자기소개)
exports.readResumeInfoByResumeId = async function (req, res) {
  const connection = await pool.getConnection(async (conn) => conn);

  try {
    logger.info("readResumeInfoByResumeId 실행됨");
    let resData = {};
    const { resumeId } = req.params;

    /* ES6의 비구조 할당 */
    const [profile] = await indexDao.selectUserByResumeId(connection, resumeId);
    const [links] = await indexDao.selectLinksByResumeId(connection, resumeId);
    const [skills] = await indexDao.selectSkillsByResumeId(
      connection,
      resumeId
    );
    const [projects] = await indexDao.selectProjectsByResumeId(
      connection,
      resumeId
    );
    const [careers] = await indexDao.selectCareersByResumeId(
      connection,
      resumeId
    );

    resData = {
      profile: { ...profile[0] },
      links: [...links],
      skills: [...skills],
      projects: [...projects],
      careers: [...careers],
    };

    return res.send({
      result: resData,
      isSuccess: true,
      code: 200,
      message: "요청 성공",
    });
  } catch (err) {
    logger.error(`example DB Connection error\n: ${JSON.stringify(err)}`);
    return false;
  } finally {
    connection.release();
  }
};
