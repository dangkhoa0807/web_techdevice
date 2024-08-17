
import {create} from "zustand";


interface CartItem {
	id: number;
	name: string;
	price: number;
	price_sales?: number;
	image: string;
	quantity: number;
}
interface CartState {
cart: CartItem[];
addToCart: (item: CartItem) => void;
updateCart:(item: CartItem) => void;
deleteCart:(item: CartItem) => void;
deloyCart:() => void
}
  

const useCartStore = create<CartState>((set) => ({
	cart: JSON.parse(localStorage.getItem('cart') || ''),
	addToCart: (item) => set((state) => {
	  const updatedCart = [...state.cart, item];
	  localStorage.setItem('cart', JSON.stringify(updatedCart));
	  return { cart: updatedCart };
	}),
	updateCart: (item) => set((state) => {
		const updatedCart= state.cart.map((product) =>{
			if(product.id === item.id) {
				return item;
			}
			else{
				return product;
			}
		})
		localStorage.setItem('cart', JSON.stringify(updatedCart));
		return { cart: updatedCart };
	}),
	deleteCart :( item )=> set((state)=>{
		const deleteCart = state.cart.filter((product) => product.id !== item.id);
		localStorage.setItem('cart', JSON.stringify(deleteCart));
		return {cart :deleteCart}
	}),
	deloyCart:()=> set((state)=> {
		const emptyCart :CartItem[] = [];
		localStorage.setItem('cart', JSON.stringify(emptyCart));
		return { cart: emptyCart };
	}),
  }));

export default useCartStore;