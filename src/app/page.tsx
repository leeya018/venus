import Clients from "@/components/clients"
import Hero from "@/components/hero"
import MessageUs from "@/components/messageUs"
import Navbar from "@/components/navbar"
import Profits from "@/components/profits"
import Services from "@/components/services"
import Team from "@/components/team"
import Offices from "@/components/offices"
import BottomNav from "@/components/bottomNav"
import Image from "next/image"
import React from "react"

export default function homePage() {
  return (
    <div className="max-w-full text-gray-700">
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
      {/* offices */}
      <Offices />
      {/* bottom nav */}
      <BottomNav />
    </div>
  )
}
