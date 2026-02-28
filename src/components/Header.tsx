"use client"
import Link from 'next/link'
import { useState } from 'react';
import { IoCloseOutline, IoMenu } from "react-icons/io5";

const Header = () => {
  console.log('hello')
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='fixed top-0 bg-white/95 w-full backdrop-blur-sm shadow-sm z-50 '>
      <div className='container mx-auto p-4 flex items-center justify-between'>
        <h1 className='text-2xl font-bold text-gray-600'>
          <Link href={'/'}>Eva Dev</Link>
        </h1>
        <nav className="hidden md:flex items-center space-x-8">
          <Link className='text-gray-700 hover:text-blue-600 transition-colors capitalize' href={'/about'}>about</Link>
          <Link className='text-gray-700 hover:text-blue-600 transition-colors capitalize' href={'/posts'}>posts</Link>
          <Link className='text-gray-700 hover:text-blue-600 transition-colors capitalize' href={'/contact'}>contact</Link>
        </nav>
        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoCloseOutline className='w-6 h-6' /> : <IoMenu className='w-6 h-6' />}

        </button>

        {
          isOpen &&
          (
            <nav className="flex flex-col md:hidden  items-center space-y-8 mt-4 pb-4 absolute right-0 w-[80%] top-10 transition-discrete bg-white">
              <Link className='text-gray-700 hover:text-blue-600 transition-colors capitalize' href={'/about'}>about</Link>
              <Link className='text-gray-700 hover:text-blue-600 transition-colors capitalize' href={'/posts'}>posts</Link>
              <Link className='text-gray-700 hover:text-blue-600 transition-colors capitalize' href={'/contact'}>Contact</Link>
            </nav>
          )
        }

        <div className='hidden md:flex items-center space-x-4'>
          <button className='px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white capitalize rounded-md'>
            <Link href={'/login'}>login</Link>
          </button>
          <button className='px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white capitalize rounded-md'>
            <Link href={'/register'}>register</Link>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
