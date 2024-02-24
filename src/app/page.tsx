import Navbar from "@/components/navbar"
import Image from "next/image"
import React from "react"

export default function homePage() {
  return (
    <div className="w-screen min-w-screen">
      {/* navbar */}
      <Navbar />
      {/* <div className="w-full py-[15px] px-[80px] "></div> */}
    </div>
  )
}
