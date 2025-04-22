import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

const Introduce: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mx-auto container flex flex-col md:flex-row jubstify-between items-center gap-4">
        <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-4">
          <p className="md:text-7xl text-3xl text-nowrap">
            Hi all, I'm Wichai 👋
          </p>
          <span className="text-wrap text-base md:text-2xl">
            A passionate Full Stack Software Developer 🚀 having an experience
            of building Web and Mobile applications with JavaScript / Reactjs /
            Nodejs / React Native and some other cool libraries and frameworks.
          </span>
          <div className="flex gap-4 justify-center items-center">
            <button className="rounded-full p-2 bg-gray-500 text-white ">
              <Github />
            </button>
            <button className=" rounded-full p-2 bg-blue-500 text-white">
              <Linkedin />
            </button>
            <button className="rounded-full p-2 bg-red-500 text-white">
              <Mail />
            </button>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-300 ease-in-out">
              Contact Me
            </button>
            <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-300 ease-in-out">
              Download Resume
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">dasdsa</div>
      </div>
    </div>
  )
}

export default Introduce
