'use client'

import dotenv from 'dotenv'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import type { AxiosError } from 'axios'
import axios from 'axios'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #ccc',
  boxShadow: 24,
  p: 4
}

interface Props {
  openDele: boolean
  setOpenDele: React.Dispatch<React.SetStateAction<boolean>>
  idProduct: number
}
interface ErrorResponse {
  message: string
  status: number
}
// eslint-disable-next-line import/no-named-as-default-member
dotenv.config()

const DeleProduct: React.FC<Props> = props => {
  const { openDele, setOpenDele, idProduct } = props

  const handleCloseDele = () => {
    setOpenDele(false)
    console.log(idProduct)
  }

  const handleDeleProduct = async (id: number) => {
    const token = Cookies.get('token')

    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_PRODUCT}/deleProduct/${id}`, {
        withCredentials: true,
        headers: {
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

  return (
    <Modal
      open={openDele}
      onClose={handleCloseDele}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h4' component='h2'>
          Xoá sản phẩm
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Bạn có chắc muốn xoá sản phẩm
        </Typography>
        <Typography className='flex justify-end'>
          <Button variant='contained' type='button' onClick={() => handleDeleProduct(idProduct)}>
            Xoá
          </Button>
        </Typography>
      </Box>
    </Modal>
  )
}

export default DeleProduct
