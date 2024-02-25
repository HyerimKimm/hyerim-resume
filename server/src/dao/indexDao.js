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
  const selectLinksByResumeIdQuery = `SELECT linkId, linkName, url, orderNum FROM Links WHERE resumeId = ? ORDER BY orderNum ASC`;

  const params = [resumeId];

  const rows = await connection.query(selectLinksByResumeIdQuery, params);

  return rows;
};

exports.selectSkillsByResumeId = async function (connection, resumeId) {
  const selectSkillsByResumeIdQuery = `SELECT idSkills, category, skillName, level, description, orderNum FROM Skills WHERE resumeId = ? ORDER BY orderNum ASC`;

  const params = [resumeId];

  const rows = await connection.query(selectSkillsByResumeIdQuery, params);

  return rows;
};

exports.selectProjectsByResumeId = async function (connection, resumeId) {
  const selectProjectByResumeIdQuery = `SELECT projectId, projectName, startDate, endDate, deployLink, repositoryLink, links, staff, description, responsibilities, results, orderNum FROM Projects WHERE resumeId = ? ORDER BY orderNum ASC`;

  const params = [resumeId];

  const rows = await connection.query(selectProjectByResumeIdQuery, params);

  return rows;
};

exports.selectCareersByResumeId = async function (connection, resumeId) {
  const selectCareersByResumeIdQuery = `SELECT careerId, companyName, startDate, endDate, departmentName, responsibilities, results, orderNum FROM Careers WHERE resumeId = ? ORDER BY orderNum ASC`;

  const params = [resumeId];

  const rows = await connection.query(selectCareersByResumeIdQuery, params);

  return rows;
};

exports.selectExperiencesByResumeId = async function (connection, resumeId) {
  const selectExperiencesByResumeIdQuery = `SELECT experienceId, title, startDate, endDate, place, description, orderNum FROM Experiences WHERE resumeId = ? ORDER BY orderNum ASC`;

  const params = [resumeId];

  const rows = await connection.query(selectExperiencesByResumeIdQuery, params);

  return rows;
};

exports.selectEducationsByResumeId = async function (connection, resumeId) {
  const selectEducationsByResumeIdQuery = `SELECT idEducations AS educationId, title, startDate, endDate, description, orderNum FROM Educations WHERE resumeId=? ORDER BY orderNum ASC`;

  const params = [resumeId];

  const rows = await connection.query(selectEducationsByResumeIdQuery, params);

  return rows;
};

exports.selectCertificatesByResumeId = async function (connection, resumeId) {
  const selectCertificateByResumeIdQuery = `SELECT certificateId, title, issueDate, fileUrl, orderNum FROM Certificates WHERE resumeId=? ORDER BY orderNum ASC`;

  const params = [resumeId];

  const rows = await connection.query(selectCertificateByResumeIdQuery, params);

  return rows;
};

exports.select;
