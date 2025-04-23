import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faDocker,
  faGolang,
  faHtml5,
  faJs,
  faNodeJs,
  faNpm,
  faReact,
  faYarn,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { SiTypescript } from 'react-icons/si'
import Image from 'next/image'

const skills: React.FC = () => {
  return (
    <div className="flex justify-between items-center" id="skills">
      <div className="mx-auto container flex flex-col-reverse md:flex-row justify-between items-center gap-4">
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={`/second.jpg`}
            alt="skills"
            width={1200}
            height={100}
            style={{ width: '100%', height: 'auto', maxWidth: '1200px' }}
            className="md:w-[1200px] sm:w-[600px]"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-4">
          <p className="md:text-7xl text-3xl text-nowrap">What I do</p>
          <span className="text-wrap text-base md:text-2xl">
            CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
          </span>
          <div className="flex flex-wrap justify-center items-center gap-4 text-5xl">
            <div className="flex flex-col items-center hover:scale-110 transition-transform duration-200">
              <SiTypescript className="text-5xl text-blue-500 hover:text-blue-500 transition-colors duration-200" />
              <span className="text-xs mt-2">TypeScript</span>
            </div>
            {[
              { icon: faHtml5, label: 'HTML5', color: '#E34F26' },
              { icon: faCss3, label: 'CSS3', color: '#1572B6' },
              { icon: faJs, label: 'JavaScript', color: '#F7DF1E' },
              { icon: faReact, label: 'React', color: '#61DAFB' },
              { icon: faNodeJs, label: 'Node.js', color: '#339933' },
              { icon: faNpm, label: 'NPM', color: '#CB3837' },
              { icon: faDatabase, label: 'PostgreSQL', color: '#336791' },
              { icon: faGolang, label: 'Golang', color: '#00ADD8' },
              { icon: faDocker, label: 'Docker', color: '#2496ED' },
              { icon: faYarn, label: 'Yarn', color: '#2C8EBB' },
            ].map((skill, index) => (
              <div
              key={index}
              className="flex flex-col items-center hover:scale-110 transition-transform duration-200"
              >
              <FontAwesomeIcon
                icon={skill.icon}
                style={{ color: skill.color }}
                className="hover:opacity-80"
              />
              <span className="text-xs mt-2">{skill.label}</span>
              </div>
            ))}
          </div>
            <p>
            ⚡ Develop highly interactive and responsive front-end user interfaces using Next.js, TypeScript, and Tailwind CSS.
            </p>
            <p>
            ⚡ Build robust and scalable back-end systems with Go, leveraging PostgreSQL as the database solution.
            </p>
            <p>
            ⚡ Utilize Docker for containerization to ensure seamless deployment and scalability of applications.
            </p>
        </div>
      </div>
    </div>
  )
}

export default skills
