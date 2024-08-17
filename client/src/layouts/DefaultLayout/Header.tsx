import React, { useEffect } from 'react'
import { useState } from 'react';
import { IconCart,IconSearch,IconUser,IconWishList } from '../../components/Icon';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import Tippy from '@tippy.js/react';
import DropDown from '../../components/DropDown';
interface User {
	avatar ?: string,
	email : string,
	full_name : string,
	created_at:string,
	id : number,
	is_admin :number, 
	password : string, 
	phone : string,
	updated_at:string,
	username : string,
  }
  interface ICategory {
    id: number
    name: string
    description: string
    ordinal_number: number
  }
  interface DropdownContent {
    cate: string;
    item: { item: string }[];
  }
  interface IBrand {
    id: number;
    name: string;
  }
interface Props{
  user: User | null;
  setUser:(user: User | null) => void
}
const Header :React.FC<Props>=(props)=> {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [categories, setCategories] = useState<ICategory[]>([]);

  const {user ,setUser} = props;

  const [dropdownContent, setDropdownContent] = useState<DropdownContent[]>([]);
  
  const fetchBrandsByCate = async () => {
    try {
      const brandPromises = categories.map(async (category) => {
        const response = await axios.get(
          `${process.env.REACT_APP_API_CATEGORY}/getBrandByCategory/${category.id}`
        );
        return {
          cate: category.name,
          item: response.data.map((brand: IBrand) => ({ item: brand.name })),
        };
      });

      const brandsData = await Promise.all(brandPromises);
      
      setDropdownContent(brandsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fecthData = async()=>{
      const response =await axios.get(`${process.env.REACT_APP_API_CATEGORY}/getAllCategory`)
      if(response){
      setCategories(response.data)
      fetchBrandsByCate()
      }

      
      
      
    }

    fecthData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  

  const handleSubmit= () => {
    const url = `/search?sp=${encodeURIComponent(text)}`;
    navigate(url);
  }
  const logOut= async()=>{
    try {
      const reponsive = await axios.post(`${process.env.REACT_APP_API_AUTH}/logout`,  {}, { withCredentials: true })
      if(reponsive){
      setUser(null);
      }
      
    } catch (error) {
      
    }
  }
  return (

    <div className='mx-auto mt-10  w-full'>
      <div className=" px-20 h-14 flex items-center justify-between w-full">
        <Link to={'/'} className="logo text-3xl font-semibold">
          Tech <span className='text-blue-500'>Device</span>
        </Link>
        <div className="search w-3/5 border-2 h-12 border-inherit rounded-lg flex relative">
          <select className="h-full mx-4 w-1/4 outline-none border-r-2 border-inherit" name="product_cat">
            <option value="">All Categories</option>
            <option value="activated-carbon">Activated Carbon</option>
            <option value="air-to-air">Air-To-Air</option>
            <option value="audio">Audio</option>
          </select>
          <input type="text" className='h-full pl-5 w-2/4 outline-none font-medium' placeholder='Tìm kiếm sản phẩm' onChange={(e) => setText(e.target.value)}/>
          <div className='absolute right-5 top-3 ' onClick={handleSubmit}>
            <IconSearch  />
          </div>
        </div>
        <div className="icon w-40 flex items-center justify-between">
          <Tippy
          content={user ? <div className="bg-white w-40  rounded shadow-lg" >
            <Link to="/profile" className="block px-4 py-2 rounded text-gray-800 hover:bg-blue-600 hover:text-white" >Tài Khoản</Link>
          <Link to="#" className="block px-4 py-2 rounded text-gray-800 hover:bg-blue-600 hover:text-white "onClick={logOut} >Đăng xuất</Link>
         </div> :
            <div className="bg-white w-40  rounded shadow-lg" >
              <Link to="/login" className="block px-4 py-2 rounded text-gray-800 hover:bg-blue-600 hover:text-white" >Đăng nhập</Link>
            <Link to="/register" className="block px-4 py-2 rounded text-gray-800 hover:bg-blue-600 hover:text-white " >Đăng kí</Link>
          </div>
          }
          placement='bottom-start' 
          interactive={true} 
          >
            <div><IconUser/></div>
          </Tippy>
          <IconWishList />
          <Link to="http://localhost:3000/cart"><IconCart /></Link>
          
        </div>
      </div>
      <div className=" bg-blue-600 h-14 w-full"> 
        <nav className="border-gray-200 dark:bg-gray-900 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-20 ">
            <div className="w-full" id="navbar-default">
              <ul className="font-medium flex items-center mt-0 s h-14">
                <li>
               
                  <Link to="http://localhost:3000" className=" p-4 text-white md:text-white dark:text-white md:dark:text-blue-500 bg-blue-700" aria-current="page">Trang chủ</Link>
                
                </li>
                <li>
                <DropDown items={dropdownContent}>
                  <Link to="http://localhost:3000/store" className="flex items-center p-4  text-white dark:text-white  dark:hover:text-white hover:bg-blue-700  ">Sản phẩm
                  <svg
                className="fill-current h-5 w-5 transform 
                transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
                   </svg>
                  </Link>
                  </DropDown>
                </li>
                <li>
                  <Link to="#" className=" p-4 text-white dark:text-white  dark:hover:text-white hover:bg-blue-700 ">Dịch vụ</Link>
                </li>
                <li>
                  
                  <Link to="#" className="flex items-center p-4 text-white dark:text-white  dark:hover:text-white hover:bg-blue-700 ">Trang</Link>
                 
                </li>
                <li>
                  <Link to="#" className=" p-4 text-white dark:text-white  dark:hover:text-white hover:bg-blue-700 ">Liên hệ</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header