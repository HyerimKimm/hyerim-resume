const secret = require('../../config/secret');
const indexDao = require('../dao/indexDao');

exports.greeting = async function (req, res) {
    res.send('안녕하세요! 혜림의 이력서 API 서버입니다!');
}
