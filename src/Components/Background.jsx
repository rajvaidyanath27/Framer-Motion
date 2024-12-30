import React from 'react'

function Background() {
  return (
    <>
    <div className="w-full h-screen bg-zinc-400 fixed z-[2]">
      <div className="absolute top-[5%] w-full py-10 flex text-3xl justify-center text-zinc-900 ">Your eyes on Framer</div>
      <h1 className="absolute text-9xl top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] leading-none tracking-tight font-semibold text-zinc-900/90">FRAMER MOTION</h1>
    </div>
      
    </>
  )
}

export default Background
