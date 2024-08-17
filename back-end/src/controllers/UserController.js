
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const SECRET_KEY = require('../config/secret_key');
const expiresIn = '1h';
function accessToken(payload) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn:'10m' });
  }
function refreshToken(payload) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn:'30d' });
  }
class UserController {
	async handleRegister(req,res){
		const formData = req.body;
		try {
			
			
			const checkExisUser= await User.checkExistence(formData.username, formData.email);
			if(checkExisUser.length > 0){

				return res.status(400).json({ message: "tên đăng nhập,email đã tồn tại",status:400 });
			}
			else{
				const user = await User.handelRegister(formData);
			res.status(200).json({status: 200,message :'Đăng kí thành công', data: user});
			}
		} catch (error) {
			res.status(500).json({ message: 'Đăng ký thất bại' });
		}

	}
	async handelLogin(req,res){
		const {username,password} = req.body;
		try {
			const user = await User.handelLogin(username,password);
			if(user.length ===0){
				res.status(404).json({status: 404,message: "tên đăng nhập hoặc mật khẩu sai"})
			}
			else{
				const AccessToken = accessToken({ id: user[0].id });
                const RefreshToken = refreshToken({ id: user[0].id });
                res.cookie('refreshToken', RefreshToken, {
					httpOnly: true,
					maxAge: 30 * 24 * 60 * 60 * 1000,
					sameSite: 'None', // Để cho phép cookie hoạt động giữa các domain khác nhau
					secure: true // Đảm bảo rằng bạn đang sử dụng HTTPS, nếu không thì bỏ qua thuộc tính này
				  });
				res.status(200).json({ status: 200, message: "Đăng nhập thành công", data:  AccessToken  });
			}
		} catch (error) {
			res.status(500).json({ message: 'Đăng nhập thất bại' });
		}
	}
	async handelAdminLogin(req, res) {
		const { username, password } = req.body;
		try {
			const admin = await User.handelLogin(username, password);
			if (admin.length === 0 || admin[0].is_admin !== 0) {
				res.status(404).json({ status: 404, message: "Tên đăng nhập hoặc mật khẩu sai" });
			} else {
				const AccessToken = accessToken({ id: admin[0].id });
				const RefreshToken = refreshToken({ id: admin[0].id });
				res.cookie('refreshToken', RefreshToken, {
					httpOnly: true,
					maxAge: 30 * 24 * 60 * 60 * 1000,
					sameSite: 'None', // Để cho phép cookie hoạt động giữa các domain khác nhau
					secure: true // Đảm bảo rằng bạn đang sử dụng HTTPS, nếu không thì bỏ qua thuộc tính này
				  });
				res.status(200).json({ status: 200, message: "Đăng nhập thành công", data: AccessToken });
			}
		} catch (error) {
			res.status(500).json({ message: 'Đăng nhập thất bại' });
		}
	}
	async getUser(req, res) {
		try {
		  const token = req.header("Authorization")?.replace("Bearer ", "");
		  if (!token) {
			return res.status(401).json({ error: 'Yêu cầu phải có token' });
		  }	
		  const data = jwt.verify(token, SECRET_KEY);
		  const user = await User.getUserById(data.id);
		  if (!user) {
			return res.status(404).json({ error: 'Không tìm thấy người dùng' });
		  }
		  res.status(200).json({ user, status: 200 });
		} catch (error) {
		  if (error.name === 'JsonWebTokenError') {
			return res.status(401).json({ error: 'Token không hợp lệ' });
		  }
		  return res.status(404).json({ error: 'Không tìm thấy người dùng' });
		}
	  }
	async refreshAccessToken(req, res) {
        const refreshToken = req.cookies.refreshToken
        try {
            if (!refreshToken) {
                return res.status(401).json({ error: 'Refresh token must be provided' });
            }
            const data = jwt.verify(refreshToken, SECRET_KEY);
            const newAccessToken = accessToken({ id: data.id });
            res.status(200).json({ status: 200, message: "Đăng nhập thành công", data:  newAccessToken  });
        } catch (error) {
            if (error.name === 'JsonWebTokenError') {
                return res.status(401).json({ error: 'Invalid refresh token' });
            }
            res.status(500).json({ error: 'An error occurred' });
        }
    }
	async logOut(req, res) {
		try {
			res.clearCookie('refreshToken', { httpOnly: true });
			res.clearCookie('token', { httpOnly: true });
			res.status(200).json({ message: 'Đăng xuất thành công' });
		  } catch (error) {
			res.status(500).json({ message: 'Đăng xuất thất bại' });
		  }
	}
	async getUserProfile(req, res){
		
	}
	async updateUser( req, res){
		const data =req.body
		const id =req.params.id
		if (req.file) {
			data.avatar = req.file.filename;
		  }
		try {
			const user = User.updateUser(data,id);
			res.status(200).json({ message:" bạn đã thay đổi thành công", status:200});
		} catch (error) {
			res.status(500).json({ error: 'thay đổi thất bại', details: error });
		}
	}
	async updatePass(req, res) {
		const {oldPass,newPass,repeatPass} = req.body
		
		const id =req.params.id
		try {
			const checkUser = await User.getUserByIdAndPass(id,oldPass)
			if(!checkUser){
				res.status(404).json({status:404, message :"Mật khẩu cũ không chính xác"})
			}
			else{
				const changePass = await User.changePass(id,newPass)
				if(changePass){
					res.status(200).json({status:200, message :"Thay lỗi mật khẩu thành công"})
				}
			}
		} catch (error) {
			res.status(500).json({ message: 'thay đổi thất bại', status:500 });
		}

	}
}

module.exports = new UserController;