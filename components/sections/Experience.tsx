import Image from 'next/image'
import React from 'react'

const Experience: React.FC = () => {
  return (
    <div
      className="flex gap-4 flex-col container mx-auto py-10"
      id="experience"
    >
      <p className="text-6xl ">Experience</p>
      <div className="flex gap-4 flex-col md:flex-row md:justify-between mx-auto container">
        <div className="flex-1  flex flex-col border border-slate-200 rounded-md shadow-md">
          <div className=" w-full flex flex-col rounded-t-md bg-orange-400 justify-center items-center relative">
            <div className="pt-8 py-12">
              <p className="text-white text-3xl">G-ABLE</p>
            </div>
            <Image
              src={`/g-able.png`}
              alt="g-able"
              width={60}
              height={60}
              className="absolute bottom-0 translate-y-1/2 rounded-full bg-orange-500 shadow-md p-2"
            />
          </div>
          <div className="flex justify-center items-center flex-col pt-10 px-4 gap-2 py-2">
            <p>Automated Tester</p>
            <p>Jan 2018 - April 2018</p>
            <span>Bangkok, Thailand</span>

            <span className="text-sm">
              <p>
                • Cooperative Education as a Software Tester and Quality
                Assurance at G-able Company
              </p>
              <p>
                • Test manual and automated testing for web applications using
              </p>
              <p>
                • Participate in designing and developing test cases and test
                scripts.
              </p>
              <p>
                • Run Performance Test using JMeter and LoadRunner for web
                applications
              </p>
            </span>
          </div>
        </div>
        <div className="flex-1  flex flex-col rounded-md border border-slate-200 shadow-md">
          <div className=" w-full bg-blue-400 flex flex-col justify-center items-center relative">
            <div className="pt-8 py-12">
              <p className="text-white text-3xl">AR-Soft</p>
            </div>
            <Image
              src={`/ar-soft.png`}
              alt="g-able"
              width={60}
              height={60}
              className="absolute bottom-0 translate-y-1/2 rounded-full bg-slate-200 p-2 shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center items-center pt-10 py-2 gap-2 px-4">
            <p>Automated Tester</p>
            <p>November 2018 – March 2020</p>
            <span>Bangkok, Thailand</span>
            <span className="text-sm">
              <p>
                • Participate in designing and developing test cases and test
                scripts for Smart core project .
              </p>
              <p>
                • Developed and maintained test scripts to ensure software
                quality.
              </p>
              <p>
                • Collaborated with developers to identify and resolve issues.
              </p>
              <p>
                • Gather requirements, identify issues, and determine necessary
                additions or removals.
              </p>
              <p>
                • Met with clients to gather issues, overall requirements, and
                data they had to adapt to the SMCO system.
              </p>
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col rounded-md border border-slate-200 shadow-md">
          <div className=" w-full flex flex-col bg-cyan-400 justify-center items-center relative">
            <div className="pt-8 py-12">
              <p className="text-3xl text-slate-50">Smoothgraph</p>
            </div>
            <Image
              src={`/smoothgraph.png`}
              alt="g-able"
              width={60}
              height={60}
              className="absolute bottom-0 translate-y-1/2 rounded-full bg-slate-100 shadow-md p-2"
            />
          </div>
          <div className="flex flex-col justify-center items-center pt-10 py-2 gap-2 px-4">
            <p>Automated Tester</p>
            <p>March 2020 – June 2020</p>
            <span>Bangkok, Thailand</span>

            <span className="text-sm">
              <p>
                • Test manual and automated testing for web applications using
              </p>
              <p>
                • Participate in designing and developing test cases and test
                scripts.
              </p>
              <p>
                • Met with clients to gather requirements for future
                development.
              </p>
              <p>
                • Collaborated with the development team to ensure timely
                delivery of project milestones.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
