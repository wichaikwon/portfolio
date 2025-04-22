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

const skills: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="mx-auto container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex-1 flex justify-center items-center">dasdsa</div>
        <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-4">
          <p className="md:text-7xl text-3xl text-nowrap">What I do</p>
          <span className="text-wrap text-base md:text-2xl">
            CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
          </span>
          <div className="flex flex-wrap justify-center items-center gap-4 text-5xl">
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
              <div key={index} className="flex flex-col items-center">
              <FontAwesomeIcon icon={skill.icon} style={{ color: skill.color }} />
              <span className="text-xs mt-2">{skill.label}</span>
              </div>
            ))}
            <div className="flex flex-col items-center">
              <SiTypescript className="text-5xl" />
              <span className="text-xs mt-2">TypeScript</span>
            </div>
          </div>
          <p>
            ⚡ Develop highly interactive Front end / User Interfaces for your
            web and mobile applications
          </p>
          <p>
            ⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks
          </p>
          <p>
            ⚡ Integration of third party services such as Firebase/ AWS /
            Digital Ocean
          </p>
        </div>
      </div>
    </div>
  )
}

export default skills
