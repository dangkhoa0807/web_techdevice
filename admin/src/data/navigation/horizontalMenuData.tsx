// Type Imports
import type { HorizontalMenuDataType } from '@/types/menuTypes'

const horizontalMenuData = (): HorizontalMenuDataType[] => [
  {
    label: 'Home',
    href: '/home',
    icon: 'tabler-smart-home'
  },
  {
    label: 'About',
    href: '/about',
    icon: 'tabler-info-circle'
  },
  {
    label: 'Product',
    href: '/product',
    icon: 'tabler-info-circle',
    children: [
      {
        label: 'Product',
        href: '/product/:id',
        icon: 'tabler-info-circle'
      }
    ]
  }
]

export default horizontalMenuData
