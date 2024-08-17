var express = require('express');
var router = express.Router();

const userController =require('../controllers/UserController');
const verifyAccessToken = (req, res, next) => {
	const token = req.header("Authorization")?.replace("Bearer ", "");
	if (!token) {
	  return res.status(401).json({ error: 'Yêu cầu phải có token' });
	}
	try {
	  const data = jwt.verify(token, SECRET_KEY);
	  req.user = data;
	  next();
	} catch (error) {
	  if (error.name === 'TokenExpiredError') {
		return res.status(401).json({ error: 'Token đã hết hạn' });
	  }
	  if (error.name === 'JsonWebTokenError') {
		return res.status(401).json({ error: 'Token không hợp lệ' });
	  }
	  res.status(500).json({ error: 'Có lỗi xảy ra' });
	}
  };
router.post('/admin/login', userController.handelAdminLogin);
router.get('/me',userController.getUser);
router.post('/refresh',userController.refreshAccessToken);
router.post('/logout',userController.logOut);
module.exports =router;