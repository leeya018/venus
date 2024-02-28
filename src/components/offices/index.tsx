import Image from "next/image"
import React from "react"
import { data, LocationCard } from "./data"

export default function Offices() {
  return (
    <div className="flex  flex-col mt-20 gap-5 mx-20">
      <div className="text-teal-500 text-xl font-semibold">OFFICES</div>
      <div className="font-semibold text-2xl">Where can you find us?</div>
      {/* cards */}
      <ul className="flex justify-around items-center">
        {data.slice(2).map((card: LocationCard, key: number) => (
          <li key={key} className="font-semibold flex flex-col shadow-xl p-5">
            <Image
              src={"./images/location_arrow.svg"}
              alt="location"
              width={50}
              height={50}
              className="object-cover"
            />
            <div className="mt-2 text-xl ">{card.name}</div>
            <div className="mt-5 text-gray-400">{card.address}</div>
            <div className="mt-2 text-gray-400">{card.phone1}</div>
            <div className="text-gray-400">{card.phone2}</div>
            <div className="text-pink-500 mt-5 ">{card.mail}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
