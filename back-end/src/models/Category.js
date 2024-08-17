var db = require('../config/db');

class Category{
	getAllCategories(){
		return new Promise((resolve, reject) => {
			let sql= `SELECT * FROM categories ORDER BY ordinal_number asc`
			db.execute(sql, function(err, data){
				if (err) {
				reject(err);
				} else {
				resolve(data);
				}
			});
		});
	}
	getAllBrands(){
		return new Promise((resolve, reject) => {
			let sql= `SELECT * FROM brands `
			db.execute(sql, function(err, data){
				if (err) {
				reject(err);
				} else {
				resolve(data);
				}
			});
		});
	}
	getBrandByCategory(data){
		return new Promise((resolve, reject) => {
			let sql= `SELECT DISTINCT br.name, br.id FROM brands AS br LEFT JOIN products AS p ON p.id_brand = br.id LEFT JOIN categories AS ca ON ca.id = p.id_category WHERE ca.id = ? `
			db.execute(sql,[data], function(err, result){
				if (err) {
				reject(err);
				} else {
				resolve(result);
				}
			});
		});
	}
}


module.exports= new Category;