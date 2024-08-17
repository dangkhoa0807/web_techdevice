import React from 'react'

import { Link } from 'react-router-dom'
import { IconSendMail } from '../../components/Icon'
function Footer() {
  return (
	<footer className="bg-gray-900 text-gray-400 mt-16 py-10">
    <div className=" px-20"> 
      <h3>Sign up to Newsletter</h3>
      <div>
        {/* <input type="text" className=''/> */}
        <IconSendMail/>
      </div>
    </div>
    <div className="container px-20">
      <div className="flex  -mx-4">
        <div className="w-full sm:w-1/3 px-4 mb-6">
          <h2 className="text-white font-bold mb-4">Privacy Policy</h2>
          <ul>
            <li><Link to="#" className="hover:text-gray-300">Returns & Exchanges</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Payment Terms</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Delivery Terms</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Payment & Pricing</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Terms Of Use</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/3 px-4 mb-6">
          <h2 className="text-white font-bold mb-4">Get Involved</h2>
          <ul>
            <li><Link to="#" className="hover:text-gray-300">About Us</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Our Vision</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Orders & Shipping</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Office Supplies</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Contact Us</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Customer Service</Link></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/3 px-4 mb-6">
          <h2 className="text-white font-bold mb-4">Quick Links</h2>
          <ul>
            <li><Link to="#" className="hover:text-gray-300">Smartphones</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Headphones</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Laptop & Tablet</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Monitors</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Printers</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Gadgets</Link></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/3 px-4 mb-6">
          <h2 className="text-white font-bold mb-4">Customer Care</h2>
          <ul>
            <li><Link to="#" className="hover:text-gray-300">My Account</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Store Locator</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Customer Service</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Returns/Exchange</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Product Support</Link></li>
            <li><Link to="#" className="hover:text-gray-300">FAQs</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between mt-8">
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <p className="text-sm text-gray-500">© 2022 QODE INTERACTIVE, ALL RIGHTS RESERVED</p>
        </div>
        <div className="w-full sm:w-1/2 text-center sm:text-right">
          <ul className="flex justify-end">
            <li>
              <Link to="#" className="hover:text-gray-300 mx-2">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-300 mx-2">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-300 mx-2">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
</footer>
  )
}

export default Footer