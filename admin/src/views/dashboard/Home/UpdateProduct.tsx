'use client'

import React, { useState, useEffect } from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import type { SubmitHandler } from 'react-hook-form'
import { useForm, Controller } from 'react-hook-form'

import Cookies from 'js-cookie'

import dotenv from 'dotenv'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import type { AxiosError } from 'axios'
import axios from 'axios'

// Third-party Imports
import { useDropzone } from 'react-dropzone'

import CustomTextField from '@/@core/components/mui/TextField'

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
interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  product: IProduct
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #ccc',
  boxShadow: 24,
  pt: 4,
  px: 4,
  pb: 3
}

// eslint-disable-next-line import/no-named-as-default-member
dotenv.config()

const UpdateProduct: React.FC<Props> = props => {
  const { open, setOpen, product } = props

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
  useEffect(() => {
    const price_sale: string = product.price_sale ? product.price_sale.toString() : ''

    setValue('name', product.name)
    setValue('description', product.description)

    setValue('price', product.price.toString())
    setValue('price_sale', price_sale)
    setValue('quantity', product.quantity.toString())
    setValue('id_brand', product.id_brand)
    setValue('id_category', product.id_category)
  }, [setValue, product])

  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {
      const token = Cookies.get('token')

      const responsive = await axios.post(`${process.env.NEXT_PUBLIC_API_PRODUCT}/updateProduct/${product.id}`, data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })

      const success = responsive.data.message

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
        setTimeout(() => {
          location.reload()
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

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box sx={{ ...style, width: 700 }}>
          <Card>
            <CardHeader title='Thêm sản phẩm' />
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name='name'
                      control={control}
                      render={({ field }) => (
                        <CustomTextField {...field} fullWidth label='Tên sản phẩm' placeholder='Tên sản phẩm' />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name='quantity'
                      control={control}
                      render={({ field }) => (
                        <CustomTextField {...field} fullWidth label='Số lượng' placeholder='Số lượng' />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name='price'
                      control={control}
                      render={({ field }) => <CustomTextField {...field} fullWidth label='Giá' placeholder='Giá' />}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name='price_sale'
                      control={control}
                      render={({ field }) => (
                        <CustomTextField {...field} fullWidth label='Giá khiến mãi' placeholder='Giá Khiến mãi' />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name='id_category'
                      control={control}
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
                      render={({ field }) => <CustomTextField {...field} rows={4} fullWidth multiline label='Mô tả' />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name='image'
                      control={control}
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
                      Lưu
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  )
}

export default UpdateProduct
