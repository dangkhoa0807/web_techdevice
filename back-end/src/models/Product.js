var db = require("../config/db");

class Product {
  getAllProducts() {
    return new Promise((resolve, reject) => {
      let sql = `SELECT p.* , ca.name AS category_name, br.name AS brand_name 
					FROM products AS p 
					LEFT JOIN categories AS ca ON ca.id = p.id_category 
					LEFT JOIN brands AS br ON br.id = p.id_brand 
					ORDER BY p.id desc`;
      db.execute(sql, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  getOneProductById(id) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT p.* , ca.name AS category_name, br.name AS brand_name FROM products AS p 
			LEFT JOIN categories AS ca ON ca.id = p.id_category 
			LEFT JOIN brands AS br ON br.id = p.id_brand 
			WHERE p.id= ?`;
      db.execute(sql, [id], function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data.length ? data[0] : null);
        }
      });
    });
  }
  getProductsBycategoryNew(id) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT p.*, ca.name as category_name, br.name as brand_name 
					FROM products as p 
					LEFT JOIN categories as ca ON ca.id = p.id_category 
					LEFT JOIN brands as br ON br.id = p.id_brand
					 WHERE ca.id = ?
					ORDER BY p.id desc LIMIT 5`;
      db.execute(sql, [id], function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  getProductsBycategoryTopSelling(id) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT p.*, ca.name as category_name, br.name as brand_name 
					FROM products as p 
					LEFT JOIN categories as ca ON ca.id = p.id_category 
					LEFT JOIN brands as br ON br.id = p.id_brand
					WHERE ca.id = ?
					ORDER BY p.number_of_purchases desc LIMIT 5`;
      db.execute(sql, [id], function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  getProductsBycategory(category) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT p.*, ca.name AS category_name, br.name AS brand_name FROM products AS p 
						LEFT JOIN categories AS ca ON ca.id = p.id_category 
						LEFT JOIN brands AS br ON br.id = p.id_brand 
						WHERE p.id_category = ? `;
      db.execute(sql, [category], function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  addProduct(data) {
	const {
	  name,
	  quantity,
	  price,
	  price_sale,
	  id_category,
	  id_brand,
	  description,
	  image,
	} = data;
  
	const values = [
	  name,
	  quantity,
	  price,
	  price_sale,
	  id_category,
	  id_brand,
	  description,
	  image,
	];
  
	return new Promise((resolve, reject) => {
	  const sql = `
		INSERT INTO products 
		(name, quantity, price, price_sale, id_category, id_brand, description, image)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?)
	  `;
  
	  db.execute(sql, values, (err, result) => {
		if (err) {
		  reject(err);
		} else {
		  resolve(result);
		}
	  });
	});
  }
  updateProduct(data, id) {
    return new Promise((resolve, reject) => {
      const fields = [];
      const values = [];
  
      // Kiểm tra và thêm các trường có giá trị vào mảng fields và values
      if (data.name) {
        fields.push("name = ?");
        values.push(data.name);
      }
      if (data.quantity) {
        fields.push("quantity = ?");
        values.push(data.quantity);
      }
      if (data.price) {
        fields.push("price = ?");
        values.push(data.price);
      }
      if (data.price_sale) {
        fields.push("price_sale = ?");
        values.push(data.price_sale);
      }
      if (data.id_category) {
        fields.push("id_category = ?");
        values.push(data.id_category);
      }
      if (data.id_brand) {
        fields.push("id_brand = ?");
        values.push(data.id_brand);
      }
      if (data.description) {
        fields.push("description = ?");
        values.push(data.description);
      }
      if (data.image) {
        fields.push("image = ?");
        values.push(data.image);
      }
  
      // Đảm bảo ít nhất có một trường được cập nhật
      if (fields.length > 0) {
        // Tạo câu lệnh SQL động
        const sql = `
          UPDATE products
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
  deleProduct(id){
    return new Promise((resolve, reject) => {
      let sql = 'DELETE FROM products WHERE id = ?';
      
      db.execute(sql, [id], function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  searchProduct(data){
    return new Promise((resolve, reject) => {
      let sql = `SELECT p.* , ca.name AS category_name, br.name AS brand_name 
					FROM products AS p 
					LEFT JOIN categories AS ca ON ca.id = p.id_category 
					LEFT JOIN brands AS br ON br.id = p.id_brand 
					WHERE p.name like ?`;
          let searchQuery = `%${data}%`;

      db.execute(sql,[searchQuery], function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  getProductByCategoryAndBrand(category, brand){
    return new Promise((resolve, reject) => {
      let sql = `SELECT p.* , ca.name AS category_name, br.name AS brand_name 
					FROM products AS p 
					LEFT JOIN categories AS ca ON ca.id = p.id_category 
					LEFT JOIN brands AS br ON br.id = p.id_brand 
					WHERE ca.name = ? AND br.name = ?`;
      db.execute(sql,[category,brand], function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = new Product();
