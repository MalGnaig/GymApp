import React from 'react'

export default function Button(props) {
    const {children} = props
  return (
    <button className=' font-bold px-8 mx-auto py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'> <p>{children}</p></button>
  )
}
