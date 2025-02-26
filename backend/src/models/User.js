const db = require("../config/db");

class User {
  handelRegister(data) {
    return new Promise((resolve, reject) => {
      let sql = `INSERT INTO users(full_name, username, password, email, phone) VALUES (?,?,?,?,?)`;
      let values = [
        data.fullname,
        data.username,
        data.password,
        data.email,
        data.phone,
      ];
      db.execute(sql, values, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  checkExistence(username, email) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM users WHERE username= ? OR email= ?`;
      db.execute(sql, [username, email], function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  handelLogin(username, password) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
      db.execute(sql, [username, password], function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  getUserById(id) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM users WHERE id = ? `;
      db.execute(sql, [id], function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data.length ? data[0] : null);
        }
      });
    });
  }
  updateUser(data, id) {
	return new Promise((resolve, reject) => {
	  const fields = [];
	  const values = [];
  
	  // Kiểm tra và thêm các trường có giá trị vào mảng fields và values
	  if (data.avatar) {
		fields.push("avatar = ?");
		values.push(data.avatar);
	  }
	  if (data.email) {
		fields.push("email = ?");
		values.push(data.email);
	  }
	  if (data.full_name) {
		fields.push("full_name = ?");
		values.push(data.full_name);
	  }
	  if (data.phone) {
		fields.push("phone = ?");
		values.push(data.phone);
	  }
	  if (data.username) {
		fields.push("username = ?");
		values.push(data.username);
	  }
  
	  // Đảm bảo ít nhất có một trường được cập nhật
	  if (fields.length > 0) {
		// Tạo câu lệnh SQL động
		const sql = `
		  UPDATE users
		  SET ${fields.join(", ")}
		  WHERE id = ?
		`;
  
		// Thêm id vào mảng values
		values.push(id);
  
		// Thực thi câu lệnh SQL
		db.execute(sql, values, function (err, result) {
		  if (err) {
			reject(err);
		  } else {
			resolve(result);
		  }
		});
	  } else {
		reject(new Error("No fields to update"));
	  }
	});
  }
  
  getUserByIdAndPass(id,pass){
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM users WHERE id = ? AND password = ?`;
      db.execute(sql, [id,pass], function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data.length ? data[0] : null);
        }
      });
    });
  }
  changePass(id,pass){
    return new Promise((resolve, reject) => {
      let sql = `UPDATE users SET password = ? WHERE id = ?`;
      db.execute(sql, [pass,id], function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}

module.exports = new User();
