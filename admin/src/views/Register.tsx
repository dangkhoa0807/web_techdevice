'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import axios from 'axios'
import type { AxiosError } from 'axios'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'

// Third-party Imports
import classnames from 'classnames'

import dotenv from 'dotenv'

// Type Imports
import type { SystemMode } from '@core/types'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import CustomTextField from '@core/components/mui/TextField'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
import { useSettings } from '@core/hooks/useSettings'

interface ErrorResponse {
  message: string
  status: number
}

// Util Imports
interface FormRegister {
  fullname: string
  username: string
  email: string
  password: string
  phone: string
}

// Styled Custom Components
const RegisterIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  blockSize: 'auto',
  maxBlockSize: 600,
  maxInlineSize: '100%',
  margin: theme.spacing(12),
  [theme.breakpoints.down(1536)]: {
    maxBlockSize: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxBlockSize: 450
  }
}))

const MaskImg = styled('img')({
  blockSize: 'auto',
  maxBlockSize: 345,
  inlineSize: '100%',
  position: 'absolute',
  insetBlockEnd: 0,
  zIndex: -1
})

// eslint-disable-next-line import/no-named-as-default-member
dotenv.config()

const Register = ({ mode }: { mode: SystemMode }) => {
  const router = useRouter()

  // States
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormRegister>()

  const onSubmit: SubmitHandler<FormRegister> = async data => {
    try {
      const reponsive = axios.post(`${process.env.NEXT_PUBLIC_API_USER}/register`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const success: any = (await reponsive).data

      if (success) {
        toast.success(success.message, {
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
          router.push('/login')
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

  const [isPasswordShown, setIsPasswordShown] = useState(false)

  // Vars
  const darkImg = '/images/pages/auth-mask-dark.png'
  const lightImg = '/images/pages/auth-mask-light.png'
  const darkIllustration = '/images/illustrations/auth/v2-register-dark.png'
  const lightIllustration = '/images/illustrations/auth/v2-register-light.png'
  const borderedDarkIllustration = '/images/illustrations/auth/v2-register-dark-border.png'
  const borderedLightIllustration = '/images/illustrations/auth/v2-register-light-border.png'

  // Hooks
  const { settings } = useSettings()
  const theme = useTheme()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  const characterIllustration = useImageVariant(
    mode,
    lightIllustration,
    darkIllustration,
    borderedLightIllustration,
    borderedDarkIllustration
  )

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  return (
    <div className='flex bs-full justify-center'>
      <div
        className={classnames(
          'flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden',
          {
            'border-ie': settings.skin === 'bordered'
          }
        )}
      >
        <RegisterIllustration src={characterIllustration} alt='character-illustration' />
        {!hidden && <MaskImg alt='mask' src={authBackground} />}
      </div>
      <div className='flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]'>
        <div className='absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]'>
          <Logo />
        </div>
        <div className='flex flex-col gap-6 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset] mbs-8 sm:mbs-11 md:mbs-0'>
          <div className='flex flex-col gap-1'>
            <Typography variant='h4'>Adventure starts here 🚀</Typography>
            <Typography>Make your app management easy and fun!</Typography>
          </div>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()} className='flex flex-col gap-6'>
            <CustomTextField
              autoFocus
              fullWidth
              label='Họ và tên'
              placeholder='Nhập họ và tên'
              {...register('fullname', {
                required: 'Bạn chưa nhập họ tên *',
                maxLength: { value: 30, message: 'Tối đa 30 kí tự' }
              })}
            />
            {errors.fullname && <span className=' text-red-400'>{errors.fullname.message}</span>}
            <CustomTextField
              autoFocus
              fullWidth
              label='Tên đăng nhập'
              placeholder='Nhập tên đăng nhập'
              {...register('username', {
                required: 'Bạn chưa nhập tên đăng nhập *',
                maxLength: { value: 20, message: 'Tối đa 20 kí tự *' }
              })}
            />
            {errors.username && <span className=' text-red-400'>{errors.username.message}</span>}
            <CustomTextField
              fullWidth
              label='Email'
              placeholder='Nhập Email'
              {...register('email', { required: 'Bạn chưa nhập email *' })}
            />
            {errors.email && <span className=' text-red-400'>{errors.email.message}</span>}
            <CustomTextField
              fullWidth
              label='Số điện thoại'
              placeholder='Nhập Số điện thoại'
              {...register('phone', {
                required: 'Bạn chưa nhập số điện thoại *',
                pattern: {
                  value: /^[0-9]*$/,
                  message: 'Chỉ cho phép nhập số'
                },
                maxLength: { value: 10, message: 'Tối đa 10 ký tự' },
                minLength: { value: 10, message: 'Số điện thoại phải 10 số *' }
              })}
            />
            {errors.phone && <span className=' text-red-400'>{errors.phone.message}</span>}
            <CustomTextField
              fullWidth
              label='Mật khẩu'
              placeholder='············'
              type={isPasswordShown ? 'text' : 'password'}
              {...register('password', { required: 'Bạn chưa nhập mật khẩu *' })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                      <i className={isPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            {errors.password && <span className=' text-red-400'>{errors.password.message}</span>}
            <FormControlLabel
              control={<Checkbox />}
              label={
                <>
                  <span>I agree to </span>
                  <Link className='text-primary' href='/' onClick={e => e.preventDefault()}>
                    privacy policy & terms
                  </Link>
                </>
              }
            />
            <Button fullWidth variant='contained' type='button' onClick={handleSubmit(onSubmit)}>
              Đăng Ký
            </Button>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>Already have an account?</Typography>
              <Typography component={Link} href='/login' color='primary'>
                Sign in instead
              </Typography>
            </div>
            <Divider className='gap-2'>or</Divider>
            <div className='flex justify-center items-center gap-1.5'>
              <IconButton className='text-facebook' size='small'>
                <i className='tabler-brand-facebook-filled' />
              </IconButton>
              <IconButton className='text-twitter' size='small'>
                <i className='tabler-brand-twitter-filled' />
              </IconButton>
              <IconButton className='text-textPrimary' size='small'>
                <i className='tabler-brand-github-filled' />
              </IconButton>
              <IconButton className='text-error' size='small'>
                <i className='tabler-brand-google-filled' />
              </IconButton>
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
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
