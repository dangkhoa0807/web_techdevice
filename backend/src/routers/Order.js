var express = require('express');
var router = express.Router();
const authenticate =require('../middleware/guard')
const orderController =require('../controllers/OrderController');

router.post('/orderDetail', orderController.orderDetail);
router.post('/vnpay',orderController.checkOutVNPAY);
router.post('/momo',orderController.checkOutMOMO);
router.post('/momoCallback',orderController.checkOutMOMOCallback);
router.post('/momoCheck-status',orderController.checkOutMOMOStatus);
router.post('/', orderController.handleCheckOut);

router.put('/orderPending/:id', orderController.handleOrderPending)
router.put('/orderShipping/:id', orderController.handleOrderShipping)

router.delete('/orderDele/:id', orderController.CancelOrder)

router.get('/carts/user/:id',orderController.getCartByUser);
router.get('/orderPending', orderController.getOrdersPending)
router.get('/orderShipping', orderController.getOrdersShipping)
router.get('/orderComplete', orderController.getOrdersComplete)
router.get('/getorderStatistics', orderController.getorderStatistics)
router.get('/orderByIdUser/:id',authenticate, orderController.getAllOrderByIdUser)
module.exports =router;