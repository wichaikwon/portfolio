'use client'

import { Mail } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

const Introduce: React.FC = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center"
      id="introduce"
    >
      <div className="mx-auto container flex flex-col md:flex-row jubstify-between items-center gap-4">
        <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-4">
          <p className="md:text-7xl text-3xl text-nowrap">
            {`Hi all, I'm Wichai `}👋
          </p>
          <span className="text-wrap text-base md:text-2xl text-center md:text-left">
           {` A passionate Full Stack Software Developer 🚀 with experience in
            building Web and Mobile applications using JavaScript, Next.js,
            Typescript, Node.js, React Native, and other modern libraries and
            frameworks.`}
          </span>
          <div className="flex gap-4 justify-center items-center">
            <button className="rounded-full p-2 bg-gray-500 text-white hover:bg-gray-600 transition-colors duration-300 ease-in-out">
              <SiGithub />
            </button>
            <button className=" rounded-full p-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 ease-in-out">
              <SiLinkedin />
            </button>
            <button className="rounded-full p-2 bg-red-500 text-white hover:bg-red-600 transition-colors duration-300 ease-in-out">
              <Mail />
            </button>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <button
              onClick={() => `tel:0824972870`}
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-300 ease-in-out"
            >
              Contact Me
            </button>
            <a
              href="/download/Wichai_Resume.pdf"
              target="_blank"
              download="Wichai_Resume.pdf"
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-300 ease-in-out"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={`/first.jpg`}
            alt="introduce"
            width={1200}
            height={100}
            style={{ width: '100%', height: 'auto', maxWidth: '1200px' }}
            className="md:w-[1200px] sm:w-[600px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Introduce
