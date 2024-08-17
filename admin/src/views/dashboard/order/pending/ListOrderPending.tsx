'use client'

import { useState, useEffect } from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

import type { AxiosError } from 'axios'
import axios from 'axios'

import dotenv from 'dotenv'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import DataTable from 'react-data-table-component'

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

const ListOrderPending = () => {
  const [listOrder, setListOrder] = useState<IOrder[]>([])

  const handleOrder = async (id: number) => {
    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_ORDER}/orderPending/${id}`)

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
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ORDER}/orderPending`)

        if (response.data) {
          setListOrder(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getOrder()
  }, [listOrder])

  const columns = [
    { name: 'Mã đơn', selector: (row: IOrder) => row.code_order, sortable: true },
    { name: 'Tên KH', selector: (row: IOrder) => row.name, sortable: true },
    { name: 'SĐT', selector: (row: IOrder) => row.phone, sortable: true },
    { name: 'Địa chỉ', selector: (row: IOrder) => row.address, sortable: true },
    { name: 'Ghi chú', selector: (row: IOrder) => row.note, sortable: true },
    { name: 'PTTT', selector: (row: IOrder) => row.payment_method, sortable: true },
    { name: 'Tổng Tiền', selector: (row: IOrder) => row.total_order, sortable: true },
    {
      name: 'Chi Tiết',
      cell: () => (
        <button className='btn bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase'>Chi Tiết</button>
      )
    },
    {
      name: 'Thao tác',
      cell: (row: IOrder) => (
        <button
          className='btn bg-green-500 text-white py-4 px-4 rounded-xl font-bold uppercase'
          onClick={() => handleOrder(row.id)}
        >
          Xác nhận
        </button>
      )
    }
  ]

  return (
    <Card>
      <CardHeader title='Đơn hàng chưa xác nhận' />
      <DataTable columns={columns} data={listOrder} pagination highlightOnHover striped responsive noHeader />
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

export default ListOrderPending
