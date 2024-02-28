"use client"
import Image from "next/image"
import React, { useState } from "react"
import services from "@/components/services/data"
import { GiConfirmed } from "react-icons/gi"

const serviceKeys = Object.keys(services)

export default function Services() {
  const [nav, setNav] = useState<string>(serviceKeys[0])
  const [chosenService, setChosenService] = useState<any>(
    services[serviceKeys[0]]
  )
  console.log({ chosenService })
  return (
    <div>
      <div className="font-bold  text-4xl lg:text-7xl mt-20">
        Experts in Relocation serviceNames in Spain
      </div>
      {/* list  */}
      <ul
        className="mt-5 flex flex-col gap-2 list-none text-lg
       font-bold lg:flex lg:items-center lg:justify-center lg:gap-2 lg:text-xl 
       lg:font-bold lg:flex-row  "
      >
        {Object.values(services).map((service, key) => (
          <li
            key={key}
            onClick={() => {
              setNav(serviceKeys[key])
              setChosenService(service)
            }}
            className={`${
              nav === serviceKeys[key]
                ? "text-pink-500 lg:border-pink-500 lg:border-[3px]"
                : "text-gray-700"
            } cursor-pointer   lg:px-6 lg:py-3 lg:rounded-lg`}
          >
            <div className="">{service.name}</div>
          </li>
        ))}
      </ul>

      {/* the service */}
      <div className="flex flex-col lg:flex-row mt-20 gap-10 ">
        <div className="flex-1">
          <Image
            src={chosenService.url}
            alt="relocation_txt"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>

        <div className="flex-1 mt-10">
          <div className="font-light text-2xl text-teal-500 ">
            {chosenService.name}
          </div>
          <div className="font-bold text-3xl mt-5">{chosenService.title}</div>
          <div className="mt-16 font-semibold text-xl text-gray-500">
            {chosenService.subtitle}
          </div>
          <div className="mt-8 font-semibold tracking-wide text-xl text-gray-500">
            {chosenService.text}
          </div>
          <ul className="flex flex-col gap-5 text-lg font-semibold mt-8 ">
            {chosenService.list.map((item: string, key: number) => (
              <li key={key} className="flex items-center gap-5">
                <div className="text-pink-500">
                  <GiConfirmed size={30} />
                </div>
                <div>{item}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
