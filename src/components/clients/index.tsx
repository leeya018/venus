import Image from "next/image"
import React from "react"
import ClientIcon from "../clientIcon"

export default function Clients() {
  return (
    <div className="flex flex-col gap-5 mt-20">
      <div className="font-bold text-3xl mt-5">Our clients</div>
      <div className="mt-16 font-semibold text-xl text-gray-500">
        The depth and breadth of our experience allows us to serve all types of
        clients whether they are a small business or a large international
        company. Here are some of the many clients we’ve had the privilege to
        serve:
      </div>
      <div>
        <div className="flex items-center justify-around">
          <ClientIcon />
          <ClientIcon />
          <ClientIcon />
          <ClientIcon />
        </div>
        <div className="flex items-center justify-around">
          <ClientIcon />
        </div>
        <div className="flex items-center justify-around">
          <ClientIcon />
          <ClientIcon />
          <ClientIcon />
        </div>
        <div className="flex items-center justify-around">
          <ClientIcon />
          <ClientIcon />
        </div>
        <div className="flex items-center justify-around">
          <ClientIcon />
          <ClientIcon />
          <ClientIcon />
          <ClientIcon />
        </div>
      </div>
    </div>
  )
}
