import React from 'react'
import "../styles/common.css"

const AppLinkButton = ({icon,title}) => {
  return (
    <div className='flex items-center gap-[20px] bg-black border-2 p-[12px] cursor-pointer transition-all  duration-300 hover:border-greenradium rounded-md justify-center'>
        <img src={icon}></img>
        <div className='text-[12px] inline-flex items-center'>{title}</div>
    </div>
  )
}

export default AppLinkButton