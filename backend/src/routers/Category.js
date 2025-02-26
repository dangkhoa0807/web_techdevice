var express = require('express');
var router = express.Router();

const categoryController= require('../controllers/CategoryController');

router.get('/getAllCategory', categoryController.GetAllCategories);
router.get('/getAllBrand', categoryController.GetAllBrands);
router.get('/getBrandByCategory/:cate', categoryController.getBrandByCategory);
module.exports =router;