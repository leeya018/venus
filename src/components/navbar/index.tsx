import Image from "next/image"
import React from "react"

export default function Navbar() {
  return (
    <nav className=" p-4 flex items-center justify-between ">
      <div className="flex items-center gap-3">
        <div
          className={`bg-no-repeat bg-center bg-contain bg-relocation h-20 w-20 md:h-32 md:w-32 `}
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="text-white hover:bg-pink-500 bg-pink-600 py-4 px-11 font-bold text-xl rounded-full">
          CONTACT US
        </button>
        <Image src={"/images/flag.png"} alt="flag" width={100} height={50} />
      </div>
    </nav>
  )
}
