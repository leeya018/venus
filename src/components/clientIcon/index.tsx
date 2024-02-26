import React from "react"

export default function ClientIcon() {
  return (
    <div
      className="bg-no-repeat bg-center bg-contain"
      style={{
        backgroundImage: "url('/cola.svg')",
        width: "20vw", // This will set the width of the logo to 20% of the viewport width
        height: "20vw", // This will maintain the aspect ratio of the logo
      }}
    />
  )
}
