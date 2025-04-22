import Image from 'next/image'
import React from 'react'

const Education: React.FC = () => {
  return (
    <div className="flex flex-col " id="education">
      <div className="mx-auto container flex flex-col">
        <p className="text-6xl">Education</p>
        <div className="flex items-center gap-4">
          <Image
            src={`/Burapha_University.png`}
            alt="Burapha-University"
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-2">
            <p className="text-2xl">Burapha University</p>
            <p className="text-xl">Faculty of informatics </p>
            <p className="text-xl">Major Subject : Infomation Teachnology</p>
            <p className="text-lg">August 2014 - August 2018</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
