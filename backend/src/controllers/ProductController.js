const Product = require('../models/Product')

class ProductController {
	async GetAll(req,res){
		try {
			const listProduct =await Product.getAllProducts();
			res.status(200).json(listProduct);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

	async GetOne(req,res){
		const id = req.params.id;
		try {
			const ProductById = await Product.getOneProductById(id);
			if(!ProductById){
				res.status(404).json({message :"not found product"})
			}
			res.status(200).json(ProductById);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
	async GetProductsByCategoryNew(req, res){
		const id = req.params.id;
		try {
			const listProduct= await Product.getProductsBycategoryNew(id);
			res.status(200).json(listProduct);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
	async GetProductsByCategoryTopSelling(req, res){
		const id = req.params.id;
		try {
			const listProduct= await Product.getProductsBycategoryTopSelling(id);
			res.status(200).json(listProduct);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
	async getProductsBycategory(req, res){
		const cate= req.params.cate;
		try {
			const listProduct = await Product.getProductsBycategory(cate);
			res.status(200).json(listProduct);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
	async addProduct(req, res) {
		const data =req.body
		data.image= req.file.filename
		try {
			const product = await Product.addProduct(data)
			res.status(200).json({message:'thêm sản phẩm thành công',status:200});
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
	async updateProduct(req, res) {
		const data =req.body
		const id = req.params.id
			if(req.file){
			data.image= req.file.filename
		}
		try {
			const product = await Product.updateProduct(data, id)
			res.status(200).json({message : "Thay đổi sản phẩm thành công", status:200});
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
	async deleProduct(req,res){
		const id =req.params.id
		try {
			const product =await Product.deleProduct(id);
			if(product){
				res.status(200).json({message:' đã xoá thành công', status:200})
			}
		} catch (error) {
			res.status(500).json({ message: 'xoá thất bại', status:500 });
		}
	}
	async searchProduct(req, res) {
		let searchValue = req.query.sp;
		if (!searchValue) {
			res.json({"thongbao": "Không có giá trị tìm kiếm"}); 
			return;
		}
		try {
			
			const products = await Product.searchProduct(searchValue)
			res.status(200).json(products);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
	async getProductByCategoryAndBrand(req,res){
		const {category, brand} = req.query
		
		try {
			const products = await Product.getProductByCategoryAndBrand(category, brand)
			res.status(200).json(products);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
};

module.exports = new ProductController;

