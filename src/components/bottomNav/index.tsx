import Image from "next/image"
import React from "react"

export default function BottomNav() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center p-3 md:flex-row md:justify-between md:mx-10">
      {/* first */}
      <div className="flex items-center gap-3">
        <Image src={"/images/logo.png"} alt="logo" width={80} height={80} />
        <Image
          src={"/images/relocation_txt.png"}
          alt="relocation_txt"
          width={170}
          height={80}
        />
      </div>
      {/* right */}
      <div className="flex flex-col lg:flex-row lg:items-center  ">
        <div className="text-gray-400 font-semibold mr-5 text-center">
          Copyright 2024 Eres Venus
        </div>
        {/* third */}
        <ul className="mt-5 lg:mt-0 flex  text-gray-400 items-center gap-2 justify-center">
          <li className="underline pr-2 border-r border-gray-400">
            Legal Notice
          </li>
          <li className="underline pr-2 border-r  border-gray-400">
            Legal Notice
          </li>
          <li className="underline ">Legal Notice</li>
        </ul>
      </div>
    </div>
  )
}
