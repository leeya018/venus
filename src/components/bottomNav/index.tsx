import Image from "next/image"
import React from "react"

export default function BottomNav() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-5 lg:flex-row lg:justify-between lg:px-10 lg:py-5">
      <div className="flex items-center gap-3">
        <Image src={"/images/logo.png"} alt="logo" width={170} height={80} />
        <Image
          src={"/images/relocation_txt.png"}
          alt="relocation_txt"
          width={170}
          height={80}
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center gap-5">
        <div className="text-gray-400 font-semibold ">
          Copyright 2024 Eres Venus Relocation Portugal, S.L
        </div>
        <ul className="mt-5 lg:mt-0 flex  text-gray-400 items-center gap-2">
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
