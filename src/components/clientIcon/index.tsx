import React from "react"

export default function ClientIcon({ sizeRate = 20 }) {
  return (
    <div
      className="bg-no-repeat bg-center bg-contain"
      style={{
        backgroundImage: "url('/cola.svg')",
        width: `${sizeRate}vw`,
        height: `${sizeRate}vw`,
      }}
    />
  )
}
