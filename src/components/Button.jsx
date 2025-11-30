import React from 'react'

const Button = ({className,btnTxt}) => {
  return (
    <button className={`bg-[#FF7628] py-3.5 px-7 rounded-[100px] border border-[#FF7628] hover:bg-transparent hover:text-[#FF7628] ease-in-out duration-500 transition ${className}`}>{btnTxt}</button>
  )
}

export default Button