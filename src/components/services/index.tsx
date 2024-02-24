"use client"
import Image from "next/image"
import React, { useState } from "react"
import data from "@/data"

const services = {
  RELOCATION: "RELOCATION",
  IMMIGRATION: "IMMIGRATION",
  TAX_ADVICE: "TAX ADVICE",
  CONSULTING: "CONSULTING",
  LANGUAGE_TRAINING: "LANGUAGE TRAINING",
}

export default function Services() {
  const [nav, setNav] = useState(services.RELOCATION)
  console.log({ data })
  return (
    <div>
      <div className="font-bold text-4xl lg:text-7xl">
        Experts in Relocation Services in Spain
      </div>
      {/* list  */}
      <ul className="mt-5 flex flex-col gap-2 list-none text-lg font-bold lg:flex lg:items-center lg:justify-center lg:gap-2 lg:text-xl lg:font-bold lg:flex-row  ">
        <li
          onClick={() => setNav(services.RELOCATION)}
          className={`${
            nav === services.RELOCATION
              ? "text-pink-500 lg:border-pink-500 lg:border-[3px]"
              : "text-gray-700"
          } cursor-pointer   lg:px-6 lg:py-3 lg:rounded-lg`}
        >
          <div className="">{services.RELOCATION}</div>
        </li>
        <li
          onClick={() => setNav(services.IMMIGRATION)}
          className={`${
            nav === services.IMMIGRATION
              ? "text-pink-500 lg:border-pink-500 lg:border-[3px]"
              : "text-gray-700"
          } cursor-pointer   lg:px-6 lg:py-3 lg:rounded-lg`}
        >
          <div className="">{services.IMMIGRATION}</div>
        </li>
        <li
          onClick={() => setNav(services.TAX_ADVICE)}
          className={`${
            nav === services.TAX_ADVICE
              ? "text-pink-500 lg:border-pink-500 lg:border-[3px]"
              : "text-gray-700"
          } cursor-pointer   lg:px-6 lg:py-3 lg:rounded-lg`}
        >
          <div className="">{services.TAX_ADVICE}</div>
        </li>
        <li
          onClick={() => setNav(services.CONSULTING)}
          className={`${
            nav === services.CONSULTING
              ? "text-pink-500 lg:border-pink-500 lg:border-[3px]"
              : "text-gray-700"
          } cursor-pointer   lg:px-6 lg:py-3 lg:rounded-lg`}
        >
          <div className="">{services.CONSULTING}</div>
        </li>
        <li
          onClick={() => setNav(services.LANGUAGE_TRAINING)}
          className={`${
            nav === services.LANGUAGE_TRAINING
              ? "text-pink-500 lg:border-pink-500 lg:border-[3px]"
              : "text-gray-700"
          } cursor-pointer   lg:px-6 lg:py-3 lg:rounded-lg`}
        >
          <div className="">{services.LANGUAGE_TRAINING}</div>
        </li>
      </ul>
      {/* the service */}
      <div className="flex items-center">
        <div className="flex-1">
          <Image
            src={"/images/relocation_txt.png"}
            alt="relocation_txt"
            width={170}
            height={80}
          />
        </div>

        <div className="flex-1 mt-10">
          <div className="font-light text-2xl text-teal-500 ">
            LANGUAGE TRAINING
          </div>
          <div className="font-bold text-3xl mt-5">
            Language Training Service
          </div>
          <div className="mt-16 font-semibold text-xl ">
            “A different language is a different vision of life” — Federico
            Fellini
          </div>
          <div className="mt-8 font-semibold tracking-wide text-xl">
            Knowing the language of the destination country is key to the
            success of an international assignment both on a professional and a
            personal level. We believe language learning is both an enriching
            experience and a practical tool. That is why we offer a language
            training program for professionals that combines theoretical and
            practical exercises. The training is flexible in order to adapt to
            the dynamic schedules of busy professionals. Our aim is to make the
            acquisition of the new language valued and fun!
          </div>
        </div>
      </div>
    </div>
  )
}
