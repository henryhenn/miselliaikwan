import React from 'react'

export default function Heading(props) {
  return (
    <div>
        <h3 className="xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl font-extrabold text-center leading-10 pointer-events-none">{props.heading}</h3>
    </div>
  )
}
