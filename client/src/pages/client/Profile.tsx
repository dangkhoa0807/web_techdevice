import React from "react";

import { useState } from "react";
import {  ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ListOrder from "../../components/ListOrder";
import InforAccount from "../../components/InforAccount";
import useUserStore from "../../hooks/userStore";

const Profile = () => {
	const [tab ,setTab ]= useState<number>(1);
	const toggleTab =(index: number)=>setTab(index);
  const { user } = useUserStore();

  return (
    <div className="relative flex flex-col mb-6 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable mx-20">
      <div className="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
        <div className="flex flex-wrap mb-6 xl:flex-nowrap">
          <div className="mb-5 ">
            <div className="relative inline-block shrink-0 rounded-2xl">
              <img
                className="inline-block shrink-0 rounded-2xl w-[80px] h-[80px] lg:w-[160px] lg:h-[160px]"
                src={`${process.env.REACT_APP_PUBLIC_URL}/avatar/${user?.avatar}`}
                alt="..."
              />
              <div className="group/tooltip relative">
                <span className="w-[15px] h-[15px] absolute bg-success rounded-full bottom-0 end-0 -mb-1 -mr-2  border border-white"></span>
                <span className="text-xs absolute z-10 transition-opacity duration-300 ease-in-out px-3 py-2 whitespace-nowrap text-center transform bg-white rounded-2xl shadow-sm bottom-0 -mb-2 start-full ml-4 font-medium text-secondary-inverse group-hover/tooltip:opacity-100 opacity-0 block">
                  {" "}
                  Status: Active{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="grow">
            <div className="flex flex-wrap items-start justify-between mb-2">
              <div className="flex flex-col">
                <div className="flex items-center mb-2 ml-3">
                  <span className="text-secondary-inverse hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1">
                    {" "}
                    {user?.full_name}{" "}
                  </span>
                </div>
                <div className="flex flex-wrap pr-2 mb-4 font-medium">
                  <p className="flex items-center mb-2  text-secondary-dark hover:text-primary">
                    <span className="mr-1 ml-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
                      </svg>
                    </span>{" "}
                    {user?.phone}
                  </p>
                  <p className="flex items-center mb-2  text-secondary-dark hover:text-primary">
                    <span className="mr-1 ml-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                    </span>{" "}
                    {user?.email}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="flex flex-wrap items-center">
                <h3
                  className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"
                >
                  {" "}
                  320 Following{" "}
                </h3>
                <h3 
                  className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"
                >
                  {" "}
                  2.5k Followers{" "}
                </h3>
                <h3 
                  className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"
                >
                  {" "}
                  48 Deals{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full h-px border-neutral-200" />
		
        <ul
          className="group flex flex-wrap items-stretch text-[1.15rem] font-semibold list-none border-b-2 border-transparent border-solid active-assignments"
        >
          <li className="flex mt-2 -mb-[2px]">
            <h3 onClick={()=> toggleTab(1)}
              aria-controls="summary"
              className={tab===1 ?"inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500":"inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}
             
            >
              {" "}
              Thông tin{" "}
            </h3>
          </li>
          <li className="flex mt-2 -mb-[2px]">
            <h3  onClick={()=> toggleTab(2)}
              aria-controls="assignments"
              className={tab===2 ?"inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500":"inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}
             
            >
              {" "}
              Đơn hàng{" "}
            </h3>
          </li>
          <li className="flex mt-2 -mb-[2px]">
            <h3
              aria-controls="marketing"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
             
            >
              {" "}
              Marketing{" "}
            </h3>
          </li>
          <li className="flex mt-2 -mb-[2px]">
            <h3
              aria-controls="followers"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
             
            >
              {" "}
              Followers{" "}
            </h3>
          </li>
          <li className="flex mt-2 -mb-[2px] group">
            <h3
              aria-controls="history"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
             
            >
              {" "}
              History{" "}
            </h3>
          </li>
        </ul>
        <div className="content mt-4">
          <InforAccount tab={tab} user={user}/>
          <ListOrder tab={tab} user={user} />
        </div>
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
    </div>
  );
};

export default Profile;
