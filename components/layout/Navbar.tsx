'use client'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Babylonica } from 'next/font/google'
import { useRouter } from 'next/navigation'
const babylonicaFont = Babylonica({ weight: '400', subsets: ['latin'] })
const Navbar: React.FC = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (id: string) => {
    const element = document.getElementById(id.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <nav className="flex justify-between ">
      <div className="mx-auto container flex gap-4 py-4 md:py-0">
        <div className="flex-1 flex justify-start items-center">
          <button
            onClick={() => router.push('/')}
            className={`${babylonicaFont.className} text-4xl text-gray-500 text-nowrap`}
          >{`< Wichai />`}</button>
        </div>
        <div className="flex-1 hidden  md:flex gap-4 justify-center items-center">
          {['Skills', 'Experience', 'Projects', 'Resume', 'Contact'].map(
            (item, index) => (
              <button
                onClick={() => handleScroll(item)}
                className="text-nowrap text-lg hover:bg-gray-200 py-5 px-4 rounded-xs transition-colors duration-300 ease-in-out"
                key={index}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
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
            <X
              onClick={() => setIsOpen(false)}
              size={30}
              className="cursor-pointer"
            />
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
