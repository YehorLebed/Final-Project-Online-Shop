// JWT + secret
const jwt = require('jsonwebtoken');
const SECRET = 'jjan13129-dam29@$1_2ee';

function jwtCheck(req, secret) {
  const authorization = req && req.headers && req.headers.authorization;
  if (authorization && authorization.startsWith('Bearer ')) {
    const token = authorization.substr("Bearer ".length);
    let decoded;
    try { decoded = jwt.verify(token, secret) }
    catch (e) { return null }
    return decoded;
  }
}

exports.jwt = jwt;
exports.jwtCheck = jwtCheck;
exports.JWT_SECRET = SECRET;