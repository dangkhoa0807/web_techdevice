const jwt = require('jsonwebtoken');
const secretKey = require('../config/secret_key');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Authentication failed: Token not provided.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // Lưu thông tin người dùng vào req.user để sử dụng sau này
    // Kiểm tra quyền truy cập nếu cần
    if (req.user) {
      next(); // Cho phép tiếp tục nếu hợp lệ
    }
    
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed: Invalid token.' });
  }
};

module.exports = authenticate;
