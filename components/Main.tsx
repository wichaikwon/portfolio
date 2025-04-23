import React from 'react'
import Introduce from './sections/Introduce'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Project from './sections/Project'
const Main: React.FC = () => {
  return (
    <div className="pt-20 pb-10">
      <Introduce />
      <Skills />
      <Education />
      <Experience />
      <Project />
    </div>
  )
}

export default Main
