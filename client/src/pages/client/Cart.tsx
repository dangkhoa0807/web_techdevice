import React from 'react';
import useCartStore from '../../cartStore';
import { Link } from 'react-router-dom';
interface CartItem {
	id: number;
	name: string;
	price: number;
	price_sales?: number;
	image: string;
	quantity: number;
}
const Cart: React.FC = () => {
  const cart = useCartStore((state) => state.cart);
  const updateCart = useCartStore((state) => state.updateCart);
  const deleteCart = useCartStore((state) => state.deleteCart);
  let totalAmount = 0
  cart.forEach((item: CartItem)=>{
    const price= item.price_sales ? item.price_sales : item.price
    totalAmount +=(price * item.quantity);
  })
  const handleDeleProductToCart=(item :CartItem)=>{
    deleteCart(item);
  }
  const handleQuantityChange = (item :CartItem, change: number) => {
    const updatedItem = {
      ...item,
      quantity: item.quantity + change
    };

    // Ensure quantity does not go below 1
    if (updatedItem.quantity < 1) return;
    if (updatedItem.quantity > 5) return 5;
    updateCart(updatedItem);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Giỏ hàng</h1>
            <h2 className="font-semibold text-2xl">{cart.length} sản phẩm</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
          </div>
          {cart.length > 0 ? (
            cart.map((item) => {
              const price = item.price_sales ? item.price_sales.toLocaleString('vi', {style : 'currency', currency : 'VND'}) : item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'});
              const total =item.price_sales ? (item.price_sales *item.quantity).toLocaleString('vi', {style : 'currency', currency : 'VND'}) : (item.price * item.quantity).toLocaleString('vi', {style : 'currency', currency : 'VND'});
              return(
              
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={item.id}>
                <div className="flex w-2/5">
                  <img className="h-full w-32" src={`${process.env.REACT_APP_PUBLIC_URL}/product/${item.image}`} alt="" />
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{item.name}</span>
                    <p className="font-semibold hover:text-red-500 text-gray-500 text-xs hover:cursor-pointer" onClick={()=>handleDeleProductToCart(item)}>Xoá</p>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <svg
                    className="fill-current text-gray-600 w-3 cursor-pointer"
                    viewBox="0 0 448 512"
                    onClick={() => handleQuantityChange(item, -1)}
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input className="mx-2 border text-center w-8" type="text" value={item.quantity} readOnly />

                  <svg
                    className="fill-current text-gray-600 w-3 cursor-pointer"
                    viewBox="0 0 448 512"
                    onClick={() => handleQuantityChange(item, 1)}
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  {price}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">{total}</span>
              </div>
            )}
          )
          ) : (
            ""
          )}

          <Link to="http://localhost:3000/store" className="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Tiếp tục mua sắm 
          </Link>
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Tóm tắt hoá đơn</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Sản phẩm {cart.length}</span>
            <span className="font-semibold text-sm">{totalAmount.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-10">
            <label className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Tổng tiền</span>
              <span>{totalAmount.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
            </div>
            <Link to='http://localhost:3000/checkout' className="bg-indigo-500 font-semibold inline-block text-center hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Thanh toán
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
