var express = require('express');
var router = express.Router();
const authenticate =require('../middleware/guard')
const fs = require('fs');
const multer= require('multer');
const userController =require('../controllers/UserController');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
        const uploadPath = 'public/avatar';
        // Tạo thư mục nếu chưa tồn tại
        fs.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}.png`);
      }
    
});

const upload = multer({ storage: storage });
router.post('/register',userController.handleRegister);
router.post('/login',userController.handelLogin);
router.put('/updateUser/:id',authenticate,upload.single('avatar'),userController.updateUser)
router.get('/profile',userController.getUserProfile);
router.put('/updatPass/:id',authenticate,userController.updatePass)
module.exports =router;