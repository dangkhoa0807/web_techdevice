'use client'

import { useState, useEffect } from 'react'

import { useRouter } from 'next/navigation'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import type { SubmitHandler } from 'react-hook-form'
import { useForm, Controller } from 'react-hook-form'

import dotenv from 'dotenv'

// Third-party Imports
import { useDropzone } from 'react-dropzone'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Cookies from 'js-cookie'

import type { AxiosError } from 'axios'
import axios from 'axios'

import CustomTextField from '@/@core/components/mui/TextField'

import { useUser } from '@/@core/hooks/userContext'

import ChangePass from './ChangePass'

type FileProp = {
  name: string
  type: string
  size: number
}
interface FormValues {
  username: string
  full_name: string
  email: string
  phone: string
  avatar: File
}
interface ErrorResponse {
  message: string
  status: number
}
// eslint-disable-next-line import/no-named-as-default-member
dotenv.config()

const Profile = () => {
  const { user } = useUser()
  const router = useRouter()
  const [files, setFiles] = useState<File[]>([])

  const { control, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      username: '',
      full_name: '',
      email: '',
      phone: '',
      avatar: undefined
    }
  })

  useEffect(() => {
    if (user) {
      setValue('username', user?.username)
      setValue('full_name', user?.full_name)
      setValue('email', user?.email)
      setValue('phone', user?.phone)
    }
  }, [setValue, user])

  useEffect(() => {
    if (files.length) {
      setValue('avatar', files[0])
    }
  }, [files, setValue])

  const img = files.map((file: FileProp) => (
    <img key={file.name} alt={file.name} className='single-file-image' src={URL.createObjectURL(file as any)} />
  ))

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
    }
  })

  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {
      const token = Cookies.get('token')

      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_USER}/updateUser/${user?.id}`, data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })

      const success = response.data.message

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
          router.push('/profile')
        }, 3000)
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
      <CardHeader title='Thông tin' />
      <CardContent>
        <div className='flex flex-wrap mb-6 xl:flex-nowrap'>
          <div className='m-5 '>
            <div className='relative inline-block shrink-0 rounded-2xl'>
              <img
                className='inline-block shrink-0 rounded-2xl w-[80px] h-[80px] lg:w-[160px] lg:h-[160px]'
                src={`${process.env.NEXT_PUBLIC_APP_PUBLIC}/avatar/${user?.avatar}`}
                alt='...'
              />
              <div className='group/tooltip relative'>
                <span className='w-[15px] h-[15px] absolute bg-success rounded-full bottom-0 end-0 -mb-1 -mr-2  border border-white'></span>
                <span className='text-xs absolute z-10 transition-opacity duration-300 ease-in-out px-3 py-2 whitespace-nowrap text-center transform bg-white rounded-2xl shadow-sm bottom-0 -mb-2 start-full ml-4 font-medium text-secondary-inverse group-hover/tooltip:opacity-100 opacity-0 block'>
                  {' '}
                  Status: Active{' '}
                </span>
              </div>
            </div>
          </div>
          <div className='grow'>
            <div className='flex flex-wrap items-start justify-between mb-2'>
              <div className='flex flex-col'>
                <div className='flex items-center mb-2 ml-3'>
                  <span className='text-secondary-inverse hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1'>
                    {' '}
                    {user?.full_name}{' '}
                  </span>
                </div>
                <div className='flex flex-wrap pr-2 mb-4 font-medium'>
                  <p className='flex items-center mb-2  text-secondary-dark hover:text-primary'>
                    <span className='mr-1 ml-3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z' />
                      </svg>
                    </span>{' '}
                    {user?.phone}
                  </p>
                  <p className='flex items-center mb-2  text-secondary-dark hover:text-primary'>
                    <span className='mr-1 ml-3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-5 h-5'
                      >
                        <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
                        <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
                      </svg>
                    </span>{' '}
                    {user?.email}{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <Controller
                name='username'
                control={control}
                render={({ field }) => <CustomTextField {...field} fullWidth label='Tên đăng nhập' />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name='full_name'
                control={control}
                render={({ field }) => <CustomTextField {...field} fullWidth label='Họ và tên' />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name='email'
                control={control}
                render={({ field }) => <CustomTextField {...field} fullWidth label='Email' />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name='phone'
                control={control}
                render={({ field }) => <CustomTextField {...field} fullWidth label='Số điện thoại' />}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name='avatar'
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
            <Grid item xs={12} className='flex gap-4 justify-between'>
              <Button variant='contained' type='submit'>
                Lưu thay đổi
              </Button>
            </Grid>
          </Grid>
        </form>
        <ChangePass />
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
      </CardContent>
    </Card>
  )
}

export default Profile
