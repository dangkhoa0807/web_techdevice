const Category= require('../models/Category');

class CategoryController {

	async GetAllCategories(req, res) {
		try {
			const listCate =await Category.getAllCategories();
			res.status(200).json(listCate);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
	async GetAllBrands(req, res){
		try {
			const listBrand = await Category.getAllBrands()
			res.status(200).json(listBrand);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
	async getBrandByCategory(req, res){
		const cate = req.params.cate;
		if(!cate){
			res.status(404).json({ error: 'không thể lấy danh mục sản phẩm'});
		}
		try {
			const brands = await Category.getBrandByCategory(cate);
			res.status(200).json(brands);
			
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
		
	}
};

module.exports =new CategoryController;