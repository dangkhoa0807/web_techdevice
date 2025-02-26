const product = require('./Product');
const category=require('./Category');
const user =require('./User');
const auth = require('./Auth');
const order = require('./Order');
function router(app){
	app.use('/api/product',product);
	app.use('/api/category',category);
	app.use('/api/user',user);
	app.use('/api/auth',auth);
	app.use('/api/checkout',order);
	app.use('/api/order',order);
}


module.exports =router;