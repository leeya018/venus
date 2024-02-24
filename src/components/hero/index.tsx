import React from "react"

export default function Hero() {
  return (
    <div className="flex justify-center mx-20 text-gray-700 mt-10">
      <div className="flex flex-col justify-center gap-8 ">
        <div className="font-bold text-4xl lg:text-7xl">
          Experts in Relocation Services in Spain
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
        <button className="text-white bg-pink-600 py-3 px-8 font-bold text-xl rounded-full w-48">
          Contact us
        </button>
        <div className="flex justify-center  ">
          <div
            className="w-[500px] h-[500px] rounded-full overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/images/house_hero.jpg')" }}
          ></div>
        </div>
      </div>
    </div>
  )
}
