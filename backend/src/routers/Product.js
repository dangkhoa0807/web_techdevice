var express = require('express');
var router = express.Router();
const authenticate =require('../middleware/guard')
const fs = require('fs');
const multer= require('multer');
const productController= require('../controllers/ProductController');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
        const uploadPath = 'public/product';
        // Tạo thư mục nếu chưa tồn tại
        fs.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}.png`);
      }
    
});

const upload = multer({ storage: storage });

router.get('/getAllProducts',productController.GetAll);
router.get('/search',productController.searchProduct);
router.get('/getProductByCategory/:cate',productController.getProductsBycategory)
router.get('/getProductByCategoryNew/:id',productController.GetProductsByCategoryNew)
router.get('/getProductByCategoryTopSelling/:id',productController.GetProductsByCategoryNew)
router.get('/getProductByCategoryAndBrand',productController.getProductByCategoryAndBrand)
router.get('/:id', productController.GetOne)


router.post('/updateProduct/:id',authenticate,upload.single('image'), productController.updateProduct)
router.post('/addProduct',authenticate,upload.single('image'), productController.addProduct)
router.delete('/deleProduct/:id',authenticate,productController.deleProduct)
module.exports =router;