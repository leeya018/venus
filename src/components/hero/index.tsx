import React from "react"

export default function Hero() {
  return (
    <div className="flex justify-center  text-gray-700 mt-10">
      <div className="flex flex-col justify-center gap-8 ">
        <div className="font-bold text-4xl lg:text-7xl">
          Experts in Relocation
          <br />
          Services in Spain
        </div>
        <div className="font-semibold text-2xl tracking-wide">
          We assist our clients with their needs in international labor
          mobility.
        </div>
        <div className="text-xl">
          We offer a pool of services provided by local experts focused on
          offering our clients a unique and personalized experience, satisfying
          the needs of executives, individuals, and families.
        </div>
        <button className="text-white hover:bg-pink-500 bg-pink-600 py-3 px-8 font-bold text-xl rounded-full w-48">
          Contact us
        </button>
        <div className="flex justify-center  ">
          <div
            className="w-[70vw] h-[70vw] md:w-[55vw] md:h-[55vw] bg-hero 
             xl:absolute xl:top-0 xl:translate-x-20
             xl:-translate-y-20 xl:right-0 xl:-z-10 
          rounded-full  bg-cover bg-center"
          ></div>
        </div>
      </div>
    </div>
  )
}
