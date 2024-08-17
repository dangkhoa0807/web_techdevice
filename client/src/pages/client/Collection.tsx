import React, { useState, useEffect } from 'react';
import CollectionProduct from '../../components/CollectionProduct';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { SideBar } from '../../components/SideBar';
import { IProduct,ICategory } from '../../interface';
import ReactPaginate from 'react-paginate';
const Collection: React.FC = () => {
  const [searchParams] = useSearchParams();
  const cate = searchParams.get('cate');
  const brand = searchParams.get('brand');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  
	const pageSize =9
	const [fromIndex, setfromIndex] = useState(0);
	const toIndex = fromIndex + pageSize;
	const spTrong1Trang = products.slice(fromIndex, toIndex);
	const pageCount=Math.ceil(products.length / pageSize);
	
	
	const handlePageClick = (event :any) => {
		const newIndex = (event.selected * pageSize) % products.length;
		setfromIndex(newIndex);
	  };

    const fetchProductsByCategory = async () => {
      try {
        if(cate && brand){
        const fetchCate = await axios.get(`${process.env.REACT_APP_API_CATEGORY}/getAllCategory`);
        setCategories(fetchCate.data);
        
        const response = await axios.get(`${process.env.REACT_APP_API_PRODUCT}/getProductByCategoryAndBrand?category=${cate}&brand=${brand}`);
        setProducts(response.data);
        }
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }

    };

  useEffect(() => {
        

        fetchProductsByCategory();
     
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export default Collection;