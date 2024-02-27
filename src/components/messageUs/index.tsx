import React from "react"

export default function MessageUs() {
  return (
    <div className="bg-teal-400 text-white flex flex-col px-10 py-10 mt-20 md:flex-row">
      {/* first */}
      <div className="flex flex-col gap-3 md:flex-1">
        <div className="text-2xl">CONTACT</div>
        <div className="text-3xl font-semibold tracking-wider">
          Try our services
        </div>
        <div className="text-2xl font-bold">xlsData.js</div>
        <div className="text-lg  tracking-normal">
          Do you have any questions about our Relocation and Global Mobility
          Services? Please provide us with your complete name and contact
          details, and one of our specialists in Spain will contact you within
          24 hours.
        </div>
      </div>
      {/* second */}
      <div className="mt-10 flex flex-col gap-4 md:flex-1">
        <input
          type="text"
          className="w-full rounded-md bg-white px-4 h-16 text-lg text-gray-700 "
          placeholder="Complete Name*"
        />
        <input
          type="text"
          className="w-full rounded-md bg-white px-4 h-16 text-lg text-gray-700 "
          placeholder="Complete Name*"
        />
        <input
          type="text"
          className="w-full rounded-md bg-white px-4 h-16 text-lg text-gray-700 "
          placeholder="Complete Name*"
        />
        <input
          type="text"
          className="w-full rounded-md bg-white px-4 h-16 text-lg text-gray-700 "
          placeholder="Complete Name*"
        />
        <input
          type="text"
          className="w-full rounded-md bg-white px-4 h-16 text-lg text-gray-700 "
          placeholder="Complete Name*"
        />
        <textarea
          //   rows={10}
          //   cols={10}
          className="w-full rounded-md bg-white px-4 h-40 py-2 text-lg text-gray-700 "
          placeholder="Complete Name*"
        />
        <div className="flex items-center gap-2 font-semibold">
          <input type="checkbox" className="w-4 h-4" />
          <div>I read and agree with the privacy policy</div>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <input type="checkbox" className="w-4 h-4" />
          <div>I read and agree with the privacy policy</div>
        </div>
        <button className="text-white bg-pink-600 hover:bg-pink-500 py-5 px-8 font-bold text-xl rounded-full ">
          Send
        </button>
      </div>
    </div>
  )
}
