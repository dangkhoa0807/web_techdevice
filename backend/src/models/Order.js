var db = require("../config/db");

class Order {
  addOrder(data) {
    const values = [
      data.id_user,
      data.code_order,
      data.name,
      data.email,
      data.address,
      data.city,
      data.phone,
      data.note,
      data.payment_method,
      data.total_order,
    ];
    return new Promise((resolve, reject) => {
      let sql = `INSERT INTO orders(id_user, code_order, name, email, address, city, phone, note, payment_method, total_order)
			VALUES(?,?,?,?,?,?,?,?,?,?)`;
      db.execute(sql, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.insertId);
        }
      });
    });
  }
  addOrderDetail(data) {
    return new Promise((resolve, reject) => {
      const values = [
        data.id_product,
        data.id_order,
        data.price,
        data.quantity,
      ];
      let sql = `INSERT INTO carts(id_product, id_order, price, quantity)
				VALUES(?, ?, ?, ?)`;
      db.execute(sql, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  getCartByUser(id) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT c.*, us.id as id_user
						FROM carts as c
						LEFT JOIN orders as od ON c.id_order = od.id
						LEFT JOIN users as us on us.id = od.id_user
						WHERE us.id = ? 	 p`;
      db.execute(sql, [id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  getAllOrderByIdUser(id) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM orders WHERE id_user = ? AND payment_status >= 0 ORDER BY payment_status asc`;
      db.execute(sql, [id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  getOrdersPending() {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM orders WHERE payment_status = 0 ORDER BY id desc`;
      db.execute(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  getOrdersShipping() {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM orders WHERE payment_status = 1 ORDER BY id desc`;
      db.execute(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  getOrdersComplete() {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM orders WHERE payment_status = 2 ORDER BY id desc`;
      db.execute(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  handleOrderPending(id){
	return new Promise((resolve, reject) => {
		let sql = `UPDATE orders SET payment_status = 1 WHERE id = ?`;
		db.execute(sql,[id], (err, result) => {
		  if (err) {
			reject(err);
		  } else {
			resolve(result);
		  }
		});
	  });
  }
  handleOrderShipping(id){
	return new Promise((resolve, reject) => {
		let sql = `UPDATE orders SET payment_status = 2 WHERE id = ?`;
		db.execute(sql,[id], (err, result) => {
		  if (err) {
			reject(err);
		  } else {
			resolve(result);
		  }
		});
	  });
  }
  cancelOrder(id) {
    return new Promise((resolve, reject) => {
      let sql = 'DELETE FROM orders WHERE id = ?';
      db.execute(sql, [id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  cancelCart(id) {
    return new Promise((resolve, reject) => {
      let sql = 'DELETE FROM carts WHERE id_order = ?';
      db.execute(sql, [id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  getorderStatistics(){
    return new Promise((resolve, reject) => {
      let sql = 'SELECT total_order, created_at FROM orders WHERE payment_status = 2';
      db.execute(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}
module.exports = new Order();
