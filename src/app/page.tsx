import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Services from "@/components/services"
import Image from "next/image"
import React from "react"

export default function homePage() {
  return (
    <div className="w-screen min-w-screen text-gray-700">
      {/* navbar */}
      <Navbar />
      <div className="mx-20">
        {/* hero */}
        <Hero />
        {/* relocation serivces */}
        <Services />
      </div>
    </div>
  )
}
