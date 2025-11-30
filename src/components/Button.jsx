import React from 'react'

const Button = ({className,btnTxt}) => {
  return (
    <button className={`bg-[#FF7628] py-3.5 px-7 rounded-[100px] ${className}`}>{btnTxt}</button>
  )
}

export default Button