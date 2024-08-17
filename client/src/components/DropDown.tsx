
import Tippy from '@tippy.js/react';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  items: {
    item: { item: string }[];
    cate: string;
  }[];
  children: React.ReactElement;
}

const DropDown: React.FC<Props> = ({ items, children }) => {
  return (
    <Tippy
  content={
    <div className="bg-white p-4 rounded shadow-lg grid grid-cols-3 gap-x-16" style={{ width: '700px' }}>
      {items.map((item, index) => (
        <div key={index} className="p-2">
          <Link to={'http://localhost:3000/store/'+item.cate} className="font-bold text-black hover:underline mb-2 block">
            {item.cate}
          </Link>
          {item.item.map((cate, i) => (
            <Link to={`http://localhost:3000/collection?cate=${item.cate}&brand=${cate.item}`} key={i} className="block py-1.5 text-gray-700 hover:underline">
              {cate.item}
            </Link>
          ))}
        </div>
      ))}
    </div>
  }
  placement="top-end"
  interactive={true}
>
  {children}
</Tippy>
  );
};

export default DropDown;
