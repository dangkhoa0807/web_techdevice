'use client'

import { useEffect } from 'react'

import axios from 'axios'

import Cookies from 'js-cookie'

import dotenv from 'dotenv'

// Component Imports
import LayoutNavbar from '@layouts/components/vertical/Navbar'
import NavbarContent from './NavbarContent'

import { useUser } from '@/@core/hooks/userContext'

interface User {
  avatar?: string
  email: string
  full_name: string
  created_at: string
  id: number
  is_admin: number
  password: string
  phone: string
  updated_at: string
  username: string
}
interface ApiResponse {
  user: User
  status: number
}
// eslint-disable-next-line import/no-named-as-default-member
dotenv.config()

const Navbar = () => {
  const { user, setUser } = useUser()

  const fetchUser = async (token: string | undefined): Promise<ApiResponse> => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_AUTH}/me`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` }
      })

      return response.data
    } catch (error) {
      throw error
    }
  }

  const fetchRefresh = async (refreshToken: string | undefined): Promise<string> => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_AUTH}/refresh`,
        {},
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${refreshToken}` }
        }
      )

      if (response.data.status === 200) {
        const newToken = response.data.data
        const inOneHour = new Date(new Date().getTime() + 10 * 60 * 1000)

        Cookies.set('token', newToken, { expires: inOneHour })

        return newToken
      } else {
        throw new Error('Unable to refresh token')
      }
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = Cookies.get('token')
        const refreshToken = Cookies.get('refreshToken')

        if (!token) {
          const newToken = await fetchRefresh(refreshToken)
          const userData = await fetchUser(newToken)

          if (userData.status === 200) {
            setUser(userData.user)
          }

          return
        }

        const userData = await fetchUser(token)

        if (userData.status === 200) {
          setUser(userData.user)
        }
      } catch (error) {
        const refreshToken = Cookies.get('refreshToken')

        if (refreshToken) {
          const newToken = await fetchRefresh(refreshToken)
          const userData = await fetchUser(newToken)

          if (userData.status === 200) {
            setUser(userData.user)
          }
        } else {
          throw error
        }
      }
    }

    getUser()
  }, [setUser])

  return (
    <LayoutNavbar>
      <NavbarContent user={user} setUser={setUser} />
    </LayoutNavbar>
  )
}

export default Navbar
