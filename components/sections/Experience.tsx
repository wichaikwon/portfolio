import Image from 'next/image'
import React from 'react'

const Experience: React.FC = () => {
  return (
    <div className="flex gap-4 flex-col container mx-auto">
      Experience
      <div className="flex gap-4 flex-col md:flex-row md:justify-between mx-auto container">
        <div className="flex-1  flex flex-col ">
          <div className=" w-full flex flex-col bg-orange-400 justify-center items-center relative">
            <div className="pt-8 py-12">
              <p>G-ABLE</p>
            </div>
            <Image
              src={`/g-able.png`}
              alt="g-able"
              width={60}
              height={60}
              className="absolute bottom-0 translate-y-1/2 rounded-full bg-amber-200 "
            />
          </div>
          <div>
            <p>Automated Tester</p>
            <p>June 2018 – Present</p>
            <span>Bangkok, Thailand</span>
            <span>
              <p>
                • Automated testing for web applications using Selenium and
                Cypress.
              </p>
              <p>
                • Developed and maintained test scripts to ensure software
                quality.
              </p>
              <p>
                • Collaborated with developers to identify and resolve issues.
              </p>
            </span>
          </div>
        </div>
        <div className="flex-1  flex flex-col ">
          <div className=" w-full bg-blue-400 flex flex-col justify-center items-center relative">
            <div className="pt-8 py-12">
              <p>AR-Soft</p>
            </div>
            <Image
              src={`/ar-soft.png`}
              alt="g-able"
              width={60}
              height={60}
              className="absolute bottom-0 translate-y-1/2 rounded-full bg-amber-200 p-2"
            />
          </div>
          <div>
            <p>Automated Tester</p>
            <p>June 2018 – Present</p>
            <span>Bangkok, Thailand</span>
            <span>
              <p>
                • Automated testing for web applications using Selenium and
                Cypress.
              </p>
              <p>
                • Developed and maintained test scripts to ensure software
                quality.
              </p>
              <p>
                • Collaborated with developers to identify and resolve issues.
              </p>
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col ">
          <div className=" w-full flex flex-col bg-cyan-400 justify-center items-center relative">
            <div className="pt-8 py-12">
              <p>Smoothgraph</p>
            </div>
            <Image
              src={`/smoothgraph.png`}
              alt="g-able"
              width={60}
              height={60}
              className="absolute bottom-0 translate-y-1/2 rounded-full bg-amber-200 p-2"
            />
          </div>
          <div>
            <p>Automated Tester</p>
            <p>June 2018 – Present</p>
            <span>Bangkok, Thailand</span>
            <span>
              <p>
                • Automated testing for web applications using Selenium and
                Cypress.
              </p>
              <p>
                • Developed and maintained test scripts to ensure software
                quality.
              </p>
              <p>
                • Collaborated with developers to identify and resolve issues.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
