'use client'

import { useState } from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import type { SubmitHandler } from 'react-hook-form'
import { useForm, Controller } from 'react-hook-form'

import Cookies from 'js-cookie'

import dotenv from 'dotenv'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import type { AxiosError } from 'axios'
import axios from 'axios'

import CustomTextField from '@/@core/components/mui/TextField'

import { useUser } from '@/@core/hooks/userContext'

interface FormValues {
  oldPass: string
  newPass: string
  repeatPass: string
}
interface ErrorResponse {
  message: string
  status: number
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

const ChangePass = () => {
  const { user } = useUser()
  const [open, setOpen] = useState(false)

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      oldPass: '',
      newPass: '',
      repeatPass: ''
    }
  })

  const newPassValue = watch('newPass')

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmitChangePass: SubmitHandler<FormValues> = async data => {
    try {
      const token = Cookies.get('token')

      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_USER}/updatPass/${user?.id}`, data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
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
    <div>
      <Button className='mt-3' onClick={handleOpen}>
        Thay đổi mật khẩu
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box sx={{ ...style, width: 500 }}>
          <Card>
            <CardHeader title='Thay đổi mật khẩu' />
            <CardContent>
              <form onSubmit={handleSubmit(onSubmitChangePass)}>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <Controller
                      name='oldPass'
                      control={control}
                      rules={{ required: 'Bạn chưa nhập mật khẩu cũ *' }}
                      render={({ field }) => <CustomTextField {...field} fullWidth label='Mật khẩu cũ' />}
                    />
                    {errors.newPass && <span className=' text-red-400'>{errors.newPass.message}</span>}
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name='newPass'
                      control={control}
                      rules={{ required: 'Bạn chưa nhập mật khẩu mới *' }}
                      render={({ field }) => <CustomTextField {...field} fullWidth label='Mật khẩu mới' />}
                    />
                    {errors.newPass && <span className=' text-red-400'>{errors.newPass.message}</span>}
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name='repeatPass'
                      control={control}
                      rules={{
                        required: 'Bạn chưa nhập lại mật khẩu mới *',
                        validate: value => value === newPassValue || 'Mật khẩu nhập lại không khớp'
                      }}
                      render={({ field }) => <CustomTextField {...field} fullWidth label='Nhập lại mật khẩu mới' />}
                    />
                    {errors.repeatPass && <span className=' text-red-400'>{errors.repeatPass.message}</span>}
                  </Grid>
                  <Grid item xs={12} className='flex gap-4'>
                    <Button variant='contained' type='submit'>
                      Lưu mật khẩu
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

export default ChangePass
