import Image from "next/image"
import React from "react"

export default function Profits() {
  return (
    <div>
      <div className="flex md:justify-center font-bold text-6xl tracking-wider mt-5">
        What do you get with eres?
      </div>
      <div className="flex md:justify-center mt-16 font-semibold text-2xl tracking-wider ">
        Added value and commitment to our customers
      </div>
      <div className="flex md:justify-center mt-8  tracking-wide text-xl text-gray-400">
        Our clients are the global leaders of different industry sectors, they
        expect their suppliers to be totally committed to a service of the
        highest quality. We have the tools to meet your expectations.
      </div>
      {/* split */}
      <div className="flex flex-col lg:flex-row mt-20">
        <div className="flex-1 mt-10 mr-10 ">
          <Image
            src={"/images/portugal_map.jpg"}
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

          <div className="flex  font-bold text-3xl md:text-5xl tracking-wider mt-5 text-gray-800">
            Multi-location Based
          </div>
          <div className="flex mt-7 md:mt-16 font-semibold text-2xl md:text-3xl tracking-wider text-gray-700">
            We have offices in 9 cities in 6 countries and growing!
          </div>
          <div className="flex  mt-8  tracking-wide text-xl text-gray-400">
            Our objective is to be industry leaders in every one of our markets.
            We want to be the European relocation company of reference for
            international mobility.
          </div>
        </div>
      </div>
    </div>
  )
}
