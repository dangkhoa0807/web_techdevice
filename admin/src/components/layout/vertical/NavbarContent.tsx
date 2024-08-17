'use client'

import React from 'react'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from './NavToggle'
import ModeDropdown from '@components/layout/shared/ModeDropdown'
import UserDropdown from '@components/layout/shared/UserDropdown'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

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
interface Props {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const NavbarContent: React.FC<Props> = props => {
  const { user, setUser } = props

  return (
    <div className={classnames(verticalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}>
      <div className='flex items-center gap-4'>
        <NavToggle />
        <ModeDropdown />
      </div>
      <div className='flex items-center'>
        <UserDropdown user={user} setUser={setUser} />
      </div>
    </div>
  )
}

export default NavbarContent
