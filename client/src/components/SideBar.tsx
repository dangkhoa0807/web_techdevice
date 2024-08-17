import React from 'react'
import { Link } from 'react-router-dom'
import { ICategory } from '../interface'
import { IconLaptop, IconMouse, IconHeadphones, IconKeyboard } from './Icon'; // Adjust the import path accordingly
interface Props{
	categories: ICategory[];
}
export const SideBar:React.FC<Props> = (props) => {
	const { categories}= props;
	const categoryIcons: { [key: string]: React.FC } = {
		5: IconLaptop,
		7: IconMouse,
		8: IconHeadphones,
		9: IconKeyboard
	  };
  return (
	<aside className="" aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2">
          {categories.map(category => {
            const IconComponent = categoryIcons[category.id];
            return (
              <li key={category.id}>
                <Link to={'http://localhost:3000/store/'+category.name} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <IconComponent />
                  <span className="ml-3">{category.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  )
}
