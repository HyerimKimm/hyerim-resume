/* resumeId로 회원의 이름, 주소, 휴대폰번호, 이메일 조회 */
exports.selectUserByResumeId = async function (connection, resumeId) {
  const selectUserByResumeIdQuery = `SELECT a.title, b.name, b.address, b.phoneNumber, b.email, a.profileImageUrl, a.introduce 
      FROM Resumes a LEFT OUTER JOIN Users b ON a.userId=b.userId
      WHERE a.resumeId = ?`;
  const params = [resumeId];

  const rows = await connection.query(selectUserByResumeIdQuery, params);

  return rows;
};

exports.selectLinksByResumeId = async function (connection, resumeId) {
  const selectLinksByResumeIdQuery = `SELECT linkId, linkName, url FROM Links WHERE resumeId = ? ORDER BY orderNum ASC`;

  const params = [resumeId];

  const rows = await connection.query(selectLinksByResumeIdQuery, params);

  return rows;
};

exports.selectSkillsByResumeId = async function (connection, resumeId) {
  const selectSkillsByResumeIdQuery = `SELECT idSkills, category, skillName, level, description FROM Skills WHERE resumeId = ? ORDER BY orderNum ASC`;

  const params = [resumeId];

  const rows = await connection.query(selectSkillsByResumeIdQuery, params);

  return rows;
};

exports.selectProjectsByResumeId = async function (connection, resumeId) {
  const selectProjectByResumeIdQuery = `SELECT projectId, projectName, startDate, endDate, orderNum, deployLink, repositoryLink FROM Projects WHERE resumeId = ? ORDER BY orderNum ASC`;

  const params = [resumeId];

  const rows = await connection.query(selectProjectByResumeIdQuery, params);

  return rows;
};

exports.select;
