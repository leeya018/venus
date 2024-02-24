import Image from "next/image"
import React from "react"

export default function Navbar() {
  return (
    <nav className=" p-4 flex items-center justify-between ">
      <div className="flex items-center gap-3">
        <Image src={"/images/logo.png"} alt="logo" width={170} height={80} />
        <Image
          src={"/images/relocation_txt.png"}
          alt="relocation_txt"
          width={170}
          height={80}
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="text-white bg-pink-600 py-4 px-11 font-bold text-xl rounded-full">
          CONTACT US
        </button>
        <Image src={"/images/flag.png"} alt="flag" width={100} height={50} />
      </div>
    </nav>
  )
}
