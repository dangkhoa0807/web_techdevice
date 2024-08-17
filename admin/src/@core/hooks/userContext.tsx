'use client'
import type { ReactNode } from 'react'
import { createContext, useState, useContext } from 'react'

// Định nghĩa interface cho user
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

// Tạo Context
const UserContext = createContext<
  { user: User | null; setUser: React.Dispatch<React.SetStateAction<User | null>> } | undefined
>(undefined)

// Tạo Provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

// Custom hook để dễ dàng truy cập UserContext
export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}
