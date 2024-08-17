'use client'

import { useState, useEffect } from 'react'

import { useRouter } from 'next/navigation'

import dotenv from 'dotenv'

import type { AxiosError } from 'axios'
import axios from 'axios'

import Cookies from 'js-cookie'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import type { SubmitHandler } from 'react-hook-form'
import { useForm, Controller } from 'react-hook-form'

// Third-party Imports
import { useDropzone } from 'react-dropzone'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import CustomTextField from '@/@core/components/mui/TextField'

type FileProp = {
  name: string
  type: string
  size: number
}
interface ICategory {
  id: number
  name: string
  description: string
  ordinal_number: number
}
interface IBrand {
  id: number
  name: string
}
interface FormValues {
  name: string
  quantity: string
  price: string
  price_sale: string
  id_category: number
  id_brand: number
  description: string
  image: File
}
interface ErrorResponse {
  message: string
  status: number
}
// eslint-disable-next-line import/no-named-as-default-member
dotenv.config()

const AddProduct = () => {
  const router = useRouter()

  const [listCate, setListCate] = useState<ICategory[]>([])
  const [listBrand, setListBrand] = useState<IBrand[]>([])
  const [files, setFiles] = useState<File[]>([])

  const { control, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      name: '',
      quantity: '',
      price: '',
      price_sale: '',
      id_category: 0,
      id_brand: 0,
      description: '',
      image: undefined
    }
  })

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
    }
  })

  // Sync file with react-hook-form
  useEffect(() => {
    if (files.length) {
      setValue('image', files[0])
    }
  }, [files, setValue])

  const img = files.map((file: FileProp) => (
    <img key={file.name} alt={file.name} className='single-file-image' src={URL.createObjectURL(file as any)} />
  ))

  useEffect(() => {
    const getCate = async () => {
      try {
        const categories = await axios.get(`${process.env.NEXT_PUBLIC_API_CATEGORY}/getAllCategory`)

        setListCate(categories.data)
      } catch (error) {
        console.log(error)
      }
    }

    const getBrand = async () => {
      try {
        const brands = await axios.get(`${process.env.NEXT_PUBLIC_API_CATEGORY}/getAllBrand`)

        setListBrand(brands.data)
      } catch (error) {
        console.log(error)
      }
    }

    getCate()
    getBrand()
  }, [])

  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {
      const token = Cookies.get('token')

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_PRODUCT}/addProduct`, data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })

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

        setTimeout(() => {
          router.push('/home')
        }, 1000)
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

  return (
    <Card>
      <CardHeader title='Thêm sản phẩm' />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <Controller
                name='name'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CustomTextField {...field} fullWidth label='Tên sản phẩm' placeholder='Tên sản phẩm' />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name='quantity'
                control={control}
                rules={{ required: true }}
                render={({ field }) => <CustomTextField {...field} fullWidth label='Số lượng' placeholder='Số lượng' />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name='price'
                control={control}
                rules={{ required: true }}
                render={({ field }) => <CustomTextField {...field} fullWidth label='Giá' placeholder='Giá' />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name='price_sale'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CustomTextField {...field} fullWidth label='Giá khiến mãi' placeholder='Giá Khiến mãi' />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name='id_category'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CustomTextField {...field} select fullWidth label='Danh mục'>
                    <MenuItem value={0}></MenuItem>
                    {listCate.map(cate => (
                      <MenuItem value={cate.id} key={cate.id}>
                        {cate.name}
                      </MenuItem>
                    ))}
                  </CustomTextField>
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name='id_brand'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CustomTextField {...field} select fullWidth label='Thương hiệu'>
                    <MenuItem value={0}></MenuItem>
                    {listBrand.map(brand => (
                      <MenuItem value={brand.id} key={brand.id}>
                        {brand.name}
                      </MenuItem>
                    ))}
                  </CustomTextField>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name='description'
                control={control}
                rules={{ required: true }}
                render={({ field }) => <CustomTextField {...field} rows={4} fullWidth multiline label='Mô tả' />}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name='image'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Box {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} onChange={e => field.onChange(e.target.files)} />
                    {files.length ? (
                      img
                    ) : (
                      <div className='flex items-center flex-col'>
                        <Avatar variant='rounded' className='bs-12 is-12 mbe-9'>
                          <i className='tabler-upload' />
                        </Avatar>
                        <Typography variant='h4' className='mbe-2.5'>
                          Drop files here or click to upload.
                        </Typography>
                        <Typography>
                          Drop files here or click{' '}
                          <a href='/' onClick={e => e.preventDefault()} className='text-textPrimary no-underline'>
                            browse
                          </a>{' '}
                          through your machine
                        </Typography>
                      </div>
                    )}
                  </Box>
                )}
              />
            </Grid>
            <Grid item xs={12} className='flex gap-4'>
              <Button variant='contained' type='submit'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
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

export default AddProduct
