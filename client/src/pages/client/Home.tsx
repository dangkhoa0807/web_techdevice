import React from 'react'
import { useState,useEffect } from 'react'
import BuyNow from '../../components/BuyNow'
import Slider from '../../components/Slider'
import axios from 'axios'
import { IProduct } from '../../interface'
import CollectionProduct from '../../components/CollectionProduct'
import { Link } from 'react-router-dom'
export interface buyNow{
	label: string,
	image: string
}
interface Category{
	id: number,
    name: string,
}
function Home() {
	let slides1 = [
		"/images/Banner-gaming_laptops-removebg-preview.png",
		"/images/banner-laptop-sinh-vien-scaled-removebg.png",
		"/images/banner-n04-removebg-preview.png",
		
	  ];
	  let slides2 = [
		"/images/Premium PSD _ Gadget promotion banner template design.jpg",
		"/images/Premium Vector _ Christmas gadget sale social media instagram web banner or facebook cover template premium vector.jpg",
		"/images/black-friday-super-sale-facebook-cover-template_106176-1576.jpg",
		
	  ];
	const buyNow=[
		{
			label:'Game Joysticks',
			image:"main-home-banner-1-img.png"
		},
		{
			label:'Monitors & Keyboards',
			image:"main-home-banner-2-img.png"
		},
		{
			label:'Sport Watches',
			image:"main-home-banner-3-img.png"
		},
	]
	const [categories,setCategories]= useState<Category[]>([])
	const [productsNew, setProductsNew] = useState<IProduct[]>([]);
	const [productsSelling, setProductsSelling] = useState<IProduct[]>([]);
	const [activeProductNew, setActiveProductNew] = useState<number | null>(null);
	const [activeProductSelling, setActiveProductSelling] = useState<number | null>(null);
	useEffect(() => {
		// Fetch categories
		const fetchCategories = async () => {
		  try {
			const response = await axios.get(`${process.env.REACT_APP_API_CATEGORY}/getAllCategory`);
			setCategories(response.data);
			
			if (response.data.length > 0) {
				setActiveProductNew(response.data[0].id);
				setActiveProductSelling(response.data[0].id); // Set the first category as active by default
			}
		  } catch (error) {
			console.error('Error fetching categories:', error);
		  }
		};
	
		fetchCategories();
	  }, []);
	
	  useEffect(() => {
		// Fetch products for the active category
		//getProductByCategoryTopSelling
		const fetchProductsNew = async (categoryId: number) => {
			try {
			  const response = await axios.get(`${process.env.REACT_APP_API_PRODUCT}/getProductByCategoryNew/${categoryId}`);
			  setProductsNew(response.data);
			} catch (error) {
			  console.error('Error fetching new products:', error);
			}
		  };
	  
		  const fetchProductsSelling = async (categoryId: number) => {
			try {
			  const response = await axios.get(`${process.env.REACT_APP_API_PRODUCT}/getProductByCategoryTopSelling/${categoryId}`);
			  setProductsSelling(response.data);
			} catch (error) {
			  console.error('Error fetching top selling products:', error);
			}
		  };
	
		if (activeProductNew !== null) {
		 
			fetchProductsNew(activeProductNew);
		}
		if (activeProductSelling !== null) {
		 
			fetchProductsSelling(activeProductSelling);
		}
	  }, [activeProductNew, activeProductSelling]);
	  const handleCategoryNewClick = (categoryId: number) => {
		setActiveProductNew(categoryId);
	  };
	  const handleCategorySellingClick = (categoryId: number) => {
		setActiveProductSelling(categoryId);
	  };
  return (
	<div className=''>
		<Slider slides={slides1} />
		<div className="grid grid-cols-3 gap-5 px-20">
				{buyNow.map((item, index) => (
					<BuyNow key={index} buyNow={item} />
				))}
		</div>
		<div className="mx-20 mb-5 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
			<h3  className="text-2xl font-bold text-gray-800">Sản Phẩm Mới</h3>
    		<ul className="flex flex-wrap -mb-px">
			{categories.map((category, index) => 
		(
        <li key={index} className="me-2" onClick={(e) => {
			e.preventDefault();
			handleCategoryNewClick(category.id);
		  }}>
            <Link to="" className={
				activeProductNew === category.id ? 'inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500' :'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
			} aria-current="page">{category.name}</Link>
        </li>
				))}
				</ul>
			</div>
		<div className="mx-20  mb-5 grid grid-cols-5 gap-5">
			<CollectionProduct products={productsNew}/>
		</div>

		<Slider slides={slides2}/>
		
		<div className="mx-20 my-5 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
			<h3  className="text-2xl font-bold text-gray-800">Sản Bán Chạy</h3>
    		<ul className="flex flex-wrap -mb-px">
			{categories.map((category, index) => 
		(
        <li key={index} className="me-2" onClick={(e) => {
			e.preventDefault();
			handleCategorySellingClick(category.id);
		  }}>
            <Link to="" className={
				activeProductSelling === category.id ? 'inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500' :'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
			} aria-current="page">{category.name}</Link>
        </li>
				))}
				</ul>
			</div>
		<div className="mx-20  mb-5 grid grid-cols-5 gap-5">
			<CollectionProduct products={productsSelling}/>
		</div>
	</div>
  )
}

export default Home