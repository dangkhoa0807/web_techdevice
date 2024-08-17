'use client'

import { useState, useEffect } from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import axios from 'axios'

import dotenv from 'dotenv'

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
// eslint-disable-next-line import/no-named-as-default-member
dotenv.config()

const ListOrderComplete = () => {
  const [listOrder, setListOrder] = useState<IOrder[]>([])

  useEffect(() => {
    const getOrder = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ORDER}/orderComplete`)

        if (response.data) {
          setListOrder(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getOrder()
  }, [])

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
              <th
                scope='col'
                className='px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Chi Tiết
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
                <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex space-x-2 justify-end'>
                  <button className='bg-blue-500 text-white py-4 px-4 rounded-xl font-bold'>Chi Tiết ĐH</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default ListOrderComplete
