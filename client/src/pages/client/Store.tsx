import React, { useState, useEffect } from 'react';
import CollectionProduct from '../../components/CollectionProduct';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { SideBar } from '../../components/SideBar';
import { IProduct,ICategory } from '../../interface';
import ReactPaginate from 'react-paginate';
const Store: React.FC = () => {
  const [searchParams] = useSearchParams();
	const search = searchParams.get('sp');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  // const [loading, setLoading] = useState(true);
  
  const { cate } = useParams<{ cate: string }>();

  const normalizeString = (str: string) => {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // Remove diacritics
  };
	const pageSize =9
	const [fromIndex, setfromIndex] = useState(0);
	const toIndex = fromIndex + pageSize;
	const spTrong1Trang = products.slice(fromIndex, toIndex);
	const pageCount=Math.ceil(products.length / pageSize);
	
	
	const handlePageClick = (event :any) => {
		const newIndex = (event.selected * pageSize) % products.length;
		setfromIndex(newIndex);
	  };
  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      try {
        const fetchCate = await axios.get(`${process.env.REACT_APP_API_CATEGORY}/getAllCategory`);
        setCategories(fetchCate.data);
        if(search){
          const response = await axios.get(`${process.env.REACT_APP_API_PRODUCT}/search?sp=${search}`); // Replace with your API URL
        setProducts(response.data);
        }else{
        const response = await axios.get(`${process.env.REACT_APP_API_PRODUCT}/getAllProducts`); // Replace with your API URL
        setProducts(response.data);
        }
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // setLoading(false);
      }
    };

    fetchCategoriesAndProducts();
  }, [search]);

  useEffect(() => {
    if (cate && categories.length > 0) {
      const normalizedCate = normalizeString(cate);
      
      const cateFilter = categories.find((item: any) => normalizeString(item.name) === normalizedCate);
      
      
      if (cateFilter) {
        const fetchProductsByCategory = async () => {
          try {
            const response = await axios.get(`${process.env.REACT_APP_API_PRODUCT}/getProductByCategory/${cateFilter.id}`);
            setProducts(response.data);
          } catch (error) {
            console.error('Error fetching products by category:', error);
          }
        };

        fetchProductsByCategory();
      }
    }
  }, [cate, categories]); // Empty dependency array means this effect runs once when the component mounts

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <section className='mt-10 mx-20'>
        <div className="grid grid-cols-4 gap-10">
        <div className="col-span-1">
          <SideBar categories={categories}/>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-10">
            <CollectionProduct  products={spTrong1Trang} />
          </div>
        </div>
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className='pagination'
        />
    </section>
  );
};

export default Store;