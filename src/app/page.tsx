import Clients from "@/components/clients"
import Hero from "@/components/hero"
import MessageUs from "@/components/messageUs"
import Navbar from "@/components/navbar"
import Profits from "@/components/profits"
import Services from "@/components/services"
import Team from "@/components/team"
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
        {/* our clients */}
        <Clients />
        {/* profits */}
        <Profits />
        {/* team */}
        <Team />
      </div>
      {/* message us */}
      <MessageUs />
    </div>
  )
}
