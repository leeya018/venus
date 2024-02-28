import Image from "next/image"
import React from "react"
import ClientIcon from "../clientIcon"
import { FaStar } from "react-icons/fa"
import Profits from "../profits"

export default function Team() {
  return (
    <div>
      {/* first section */}
      <div className="flex  flex-col lg:flex-row mt-20">
        <div className="flex-1 mt-10 mr-10 ">
          <Image
            src={"/images/people.jpg"}
            alt="location_arrow.svg"
            width={500}
            height={500}
          />
        </div>
        <div className="flex-1 flex flex-col  mt-20 lg:mt-0 ">
          <Image
            src={"/images/location_arrow.svg"}
            alt="location_arrow.svg"
            width={50}
            height={50}
          />

          <div className="flex  font-semibold text-3xl md:text-3xl tracking-wider mt-5 text-gray-700">
            Our Team
          </div>

          <div className="flex  mt-8  tracking-wide text-xl text-gray-400">
            Immigration lawyers, relocation consultants, tax advisors all with
            many years of experience in global mobility, and with a high level
            of technical expertise. We are all strong and capable communicators,
            with empathy and sensitivity to attend to the particular and
            personal details that are important to each employee and family.
          </div>
        </div>
      </div>
      {/* commect */}
      <div className="flex flex-col  lg:flex-row  ">
        <ul className="py-10 px-0 lg:px-10 flex flex-col gap-8  items-center lg:flex-1">
          {new Array(3).fill(1).map((item, key) => (
            <li key={key} className="w-[90%]">
              <div className="flex items-center shadow-2xl  mx-auto p-3 rounded-lg ">
                <ClientIcon sizeRate={10} />
                <div>
                  <div className="text-xl">Esther ka .account manager</div>
                  <div className="flex items-center gap-1">
                    <FaStar fill="orange" className="" />
                    <FaStar fill="orange" className="" />
                    <FaStar fill="orange" className="" />
                    <FaStar fill="orange" className="" />
                    <FaStar fill="orange" className="" />
                  </div>
                  <div className="text-gray-400 text-md">
                    Traslado programdo el 7 abril
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/*  section 2 */}
        <div className="md:flex-1 ">
          <div className="flex  md:justify-center font-bold text-6xl tracking-wider mt-5">
            What do you get with eres?
          </div>
          <div className="flex md:justify-center mt-16 font-semibold text-2xl tracking-wider ">
            Added value and commitment to our customers
          </div>
          <div className="flex md:justify-center mt-8  tracking-wide text-xl text-gray-400">
            Our clients are the global leaders of different industry sectors,
            they expect their suppliers to be totally committed to a service of
            the highest quality. We have the tools to meet your expectations.
            Our clients are the global leaders of different industry sectors,
            they expect their suppliers to be totally committed to a service of
            the highest quality. We have the tools to meet your expectations.
          </div>
        </div>
      </div>
    </div>
  )
}
