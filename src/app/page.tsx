import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Image from "next/image"
import React from "react"

export default function homePage() {
  return (
    <div className="w-screen min-w-screen ">
      {/* navbar */}
      <Navbar />
      {/* hero */}
      <Hero />
    </div>
  )
}
