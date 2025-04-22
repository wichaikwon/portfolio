'use client'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Babylonica } from 'next/font/google'

const babylonicaFont = Babylonica({ weight: '400' })

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="flex justify-between ">
      <div className="mx-auto container flex gap-4 py-4 md:py-0">
        <div className="flex-1 flex justify-start items-center">
          <h1
            className={`${babylonicaFont.className} text-4xl text-gray-500 text-nowrap`}
          >{`< Wichai />`}</h1>
        </div>
        <div className="flex-1 hidden  md:flex gap-4 justify-center items-center">
          {['skills', 'work experience', 'project', 'Resume', 'Contact'].map(
            (item, index) => (
              <button
                className="text-nowrap text-lg hover:bg-gray-200 py-5 px-4 rounded-xs transition-colors duration-300 ease-in-out"
                key={index}
              >
                {item}
              </button>
            )
          )}
        </div>
        <button className="flex-1 md:hidden flex justify-end items-center">
          <Menu size={30} onClick={() => setIsOpen(!isOpen)} />
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-white z-10 md:hidden">
          <div className="absolute top-0 right-0 py-5 ">
            <X onClick={() => setIsOpen(false)} size={30} className='cursor-pointer'/>
          </div>
          <div className=" flex justify-center items-center flex-col h-full">
            {['skills', 'work experience', 'project', 'Resume', 'Contact'].map(
              (item, index) => (
                <button
                  className="text-nowrap text-lg hover:bg-gray-200 py-5  w-full rounded-xs transition-colors duration-300 ease-in-out"
                  key={index}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
