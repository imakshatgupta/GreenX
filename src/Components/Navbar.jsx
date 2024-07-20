import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Flex } from 'antd';


export default function Navbar() {
  return (
    <div>
    <header className="bg-blue-800 text-white py-4 px-6 md:px-10 flex items-center justify-between shadow-md">
      <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
        <span className="text-green-400">Agri Invest</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link href="#" className="hover:underline hover:text-green-400 transition-colors duration-300" prefetch={false}>
          Explore
        </Link>
        <Link href="#" className="hover:underline hover:text-green-400 transition-colors duration-300" prefetch={false}>
          Invest
        </Link>
        <Link href="#" className="hover:underline hover:text-green-400 transition-colors duration-300" prefetch={false}>
          About
        </Link>
        <Link href="#" className="hover:underline hover:text-green-400 transition-colors duration-300" prefetch={false}>
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button className="h-8 w-20 bg-green-400 text-white hover:bg-green-500 rounded-md shadow-md transition-all duration-300" type="primary">Signin</Button>
        <Button className="h-8 w-20 bg-green-400 text-white hover:bg-green-500 rounded-md shadow-md transition-all duration-300" type="primary">Login</Button>
      </div>
    </header>
  </div>
  
  )
}
