'use client'

import { useState, useEffect } from 'react'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import { useColorScheme, useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Type Imports
import dotenv from 'dotenv'

import axios from 'axios'

import type { SystemMode } from '@core/types'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

interface IOrder {
  created_at: Date
  total_order: number
}

// Vars
const series: { data: number[] }[] = [
  {
    data: []
  }
]

// eslint-disable-next-line import/no-named-as-default-member
dotenv.config()

const LineChart = ({ serverMode }: { serverMode: SystemMode }) => {
  const [orders, setOrders] = useState<IOrder[]>([])

  // Hooks

  // Hooks
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode
  const divider = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.12)`)
  const disabledText = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.4)`)

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      zoom: { enabled: false },
      toolbar: { show: false }
    },
    colors: ['#ff9f43'],
    stroke: { curve: 'straight' },
    dataLabels: { enabled: false },
    markers: {
      strokeWidth: 7,
      strokeOpacity: 1,
      colors: ['#ff9f43'],
      strokeColors: ['#fff']
    },
    grid: {
      padding: { top: -10 },
      borderColor: divider,
      xaxis: {
        lines: { show: true }
      }
    },
    tooltip: {
      y: {
        formatter: function (value: number) {
          // Định dạng số liệu thành VNĐ
          return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
        }
      }
    },
    yaxis: {
      labels: {
        style: { colors: disabledText, fontSize: '13px' },
        formatter: function (value: number) {
          // Định dạng số liệu trên trục y thành VNĐ
          return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
        }
      }
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { color: divider },
      crosshairs: {
        stroke: { color: divider }
      },
      labels: {
        style: { colors: disabledText, fontSize: '13px' }
      },
      categories: ['1/12', '2/12', '3/12', '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', '10/12', '11/12', '12/12']
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const transtiondata = () => {
    // Khởi tạo mảng 12 phần tử cho từng tháng, với giá trị khởi tạo là 0
    const monthlyTotals = new Array(12).fill(0)

    orders.forEach(order => {
      const date = new Date(order.created_at) // Chuyển đổi chuỗi thành đối tượng Date

      // Lấy thống kê theo năm 2024
      if (date.getFullYear() === 2024) {
        const monthIndex = date.getMonth() // Lấy tháng (0-11)

        // Tăng tổng số tiền cho tháng tương ứng
        monthlyTotals[monthIndex] += order.total_order
      }
    })

    // Gán kết quả vào series[0].data
    series[0].data = monthlyTotals
  }

  useEffect(() => {
    const fecthData = async () => {
      try {
        const responsive = await axios.get(`${process.env.NEXT_PUBLIC_API_ORDER}/getorderStatistics`)

        if (responsive.data) {
          setOrders(responsive.data)

          transtiondata()
        }
      } catch (error) {}
    }

    fecthData()
  }, [transtiondata])

  return (
    <Card>
      <CardHeader
        title='Thống kê năm 2024'
        subheader='Bản thống kê tổng số doanh thu được năm 2024'
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
      />
      <CardContent>
        <AppReactApexCharts type='line' width='100%' height={400} options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default LineChart
