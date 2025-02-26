import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import DefaultLayout from '../layouts/DefaultLayout';

//import Page
import Home from '../pages/client/Home';
import DetailProduct from '../pages/client/DetailProduct';
import Cart from '../pages/client/Cart';
import Store from '../pages/client/Store';
import Checkout from '../pages/client/Checkout';
import Login from '../pages/client/Login';
import Register from '../pages/client/Register';
import Profile from '../pages/client/Profile';
import Thank from '../pages/client/Thank';
import Collection from '../pages/client/Collection';
import Contact from '../pages/client/Contact';
import RoutProvider from '../components/RoutProvider';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path:"/store",
        element: <Store />
      },
      {
        path:"/store/:cate",
        element: <Store />
      },
      {
        path:"/checkout",
        element:<RoutProvider>
                  <Checkout />
                </RoutProvider>
      },
      {
        path:'product/:id',
        element : <DetailProduct />
      },
      {
        path:'profile',
        element : <RoutProvider>
                    <Profile />
                  </RoutProvider>
      },
      {
        path: "/search",
        element: <Store/>,
      },
      {
        path: "/collection",
        element: <Collection/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ]
  },
   {
    path:'login',
    element : <Login />
  },
  {
    path:'register',
    element : <Register />
  },
  {
    path:'thank',
    element : <Thank />
  },
]);
