'use client'

import { useState, useEffect } from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import type { AxiosError } from 'axios'
import axios from 'axios'

import dotenv from 'dotenv'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface IOrder {
  id: number
  name: string
  note: string
  phone: string
  code_order: string
  payment_status: number
  payment_method: string
  address: string
  total_order: number
}
interface ErrorResponse {
  message: string
  status: number
}
// eslint-disable-next-line import/no-named-as-default-member
dotenv.config()

const ListOrderShipping = () => {
  const [listOrder, setListOrder] = useState<IOrder[]>([])

  const handleOrder = async (id: number) => {
    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_ORDER}/orderShipping/${id}`)

      const success = response.data.message

      if (success) {
        if (success) {
          toast.success(success, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light'
          })
        }

        listOrder.filter(item => item.id !== id)
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>

      toast.error(axiosError.response?.data?.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
    }
  }

  useEffect(() => {
    const getOrder = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ORDER}/orderShipping`)

        if (response.data) {
          setListOrder(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getOrder()
  }, [listOrder])

  return (
    <Card>
      <CardHeader title='Đơn hàng chưa xác nhận' />
      <div className='overflow-x-auto mb-5'>
        <table className='min-w-full divide-y divide-gray-200 table-auto'>
          <thead className=''>
            <tr>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Mã đơn
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Tên KH
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                SĐT
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Địa chỉ
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Ghi chú
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                PTTT
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Tổng Tiền
              </th>
              <th scope='col' className='px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Chi Tiết
              </th>
              <th scope='col' className='px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {listOrder.map(item => (
              <tr key={item.id}>
                <td className='px-6 py-4 whitespace-nowrap text-sm'>{item.code_order}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm'>{item.name}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm'>{item.phone}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm'>{item.address}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm'>{item.note}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm'>{item.payment_method}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm'>{item.total_order}</td>
                <td className='px-6 py-4 whitespace-nowrap  text-sm'>
                  <button className='btn  bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:bg-red-300 hover:before:translate-y-0 before:transition-transform'>
                    Chi Tiết ĐH
                  </button>
                </td>
                <td className='px-6 py-4 whitespace-nowrap  text-sm'>
                  <button
                    className='btn  bg-green-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:bg-red-300 hover:before:translate-y-0 before:transition-transform'
                    onClick={() => handleOrder(item.id)}
                  >
                    Xác nhận hoàn thành
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default ListOrderShipping
