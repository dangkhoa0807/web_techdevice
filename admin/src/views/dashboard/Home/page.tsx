'use client'

// React Imports
import { useEffect, useState } from 'react'

import axios from 'axios'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Pagination from '@mui/material/Pagination'

import { ToastContainer } from 'react-toastify'

import dotenv from 'dotenv'

import UpdateProduct from './UpdateProduct'
import DeleProduct from './DeleProduct'

interface IProduct {
  id: number
  id_category: number
  id_brand: number
  name: string
  price: number
  price_sale?: number
  quantity: number
  description: string
  number_of_purchases: number
  image: string
  created_at: string
  updated_at: string
  category_name: string
  brand_name: string
}

// eslint-disable-next-line import/no-named-as-default-member
dotenv.config()

const Home = () => {
  const [open, setOpen] = useState(false)
  const [listProduct, setListProduct] = useState<IProduct[]>([])
  const [openDele, setOpenDele] = useState<boolean>(false)
  const [idProduct, setIdProduct] = useState<number>(0)

  const [product, setProduct] = useState<IProduct>({
    id: 0,
    id_category: 0,
    id_brand: 0,
    name: '',
    price: 0,
    quantity: 0,
    description: '',
    number_of_purchases: 0,
    image: '',
    created_at: '',
    updated_at: '',
    category_name: '',
    brand_name: ''
  })

  const pageSize = 5
  const [page, setPage] = useState(1)

  const fromIndex = (page - 1) * pageSize
  const toIndex = fromIndex + pageSize
  const spTrong1Trang = listProduct.slice(fromIndex, toIndex)
  const pageCount = Math.ceil(listProduct.length / pageSize)

  const handlePageClick = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleOpenDele = (id: number) => {
    setOpenDele(true)
    setIdProduct(id)
  }

  useEffect(() => {
    const getListProduct = async () => {
      const products = await axios.get(`${process.env.NEXT_PUBLIC_API_PRODUCT}/getAllProducts`)

      setListProduct(products.data)
    }

    getListProduct()
  }, [])

  const getProduct = async (id: number) => {
    try {
      const product = await axios.get(`${process.env.NEXT_PUBLIC_API_PRODUCT}/${id}`)

      if (product) {
        setProduct(product.data)
        handleOpen()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card>
      <CardHeader title='Sản phẩm' />
      <div className='overflow-x-auto mb-5'>
        <table className='min-w-full divide-y divide-gray-200 table-auto'>
          <thead className=''>
            <tr>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                ID
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Ảnh
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Tên
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Giá
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Giá KM
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Danh mục
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Thương hiệu
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Hành động
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {spTrong1Trang.map(product => (
              <tr key={product.id}>
                <td className='px-6 py-4 whitespace-nowrap text-sm dark:text-gray-400'>{product.id}</td>
                <td className=' whitespace-nowrap'>
                  <img
                    src={`${process.env.NEXT_PUBLIC_APP_PUBLIC}/product/${product.image}`}
                    className='w-20 rounded-full object-cover'
                    alt={product.name}
                  />
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm'>{product.name}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm'>
                  {product.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm'>{product.price_sale}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm'>{product.category_name}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm'>{product.brand_name}</td>
                <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex space-x-2 justify-end'>
                  <button
                    className='bg-yellow-400 text-white px-3 py-1 rounded-md hover:bg-yellow-200 focus:outline-none'
                    onClick={() => {
                      getProduct(product.id)
                    }}
                  >
                    Edit
                  </button>
                  <IconButton
                    onClick={() => {
                      handleOpenDele(product.id)
                    }}
                  >
                    <i className='tabler-trash text-[22px] text-textSecondary' />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UpdateProduct open={open} setOpen={setOpen} product={product} />
      <DeleProduct openDele={openDele} setOpenDele={setOpenDele} idProduct={idProduct} />
      <div className='flex justify-end my-5'>
        <Pagination
          shape='rounded'
          color='primary'
          variant='tonal'
          count={pageCount}
          page={page}
          onChange={handlePageClick}
          showFirstButton
          showLastButton
        />
      </div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </Card>
  )
}

export default Home
